'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set up the worker to use local file
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.js';

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

export function PDFViewer({ pdfUrl, onClose }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1.5);
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');

  // Define callback functions first
  const goToNextPage = React.useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const goToPrevPage = React.useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const zoomIn = React.useCallback(() => {
    setScale(prev => prev + 0.2);
  }, []);

  const zoomOut = React.useCallback(() => {
    setScale(prev => prev > 0.5 ? prev - 0.2 : prev);
  }, []);

  const loadPDF = React.useCallback(async () => {
    try {
      setLoading(true);
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      setPdfDoc(pdf);
      setTotalPages(pdf.numPages);
      setLoading(false);
    } catch (error) {
      console.error('Error loading PDF:', error);
      setLoading(false);
    }
  }, [pdfUrl]);

  const renderPage = React.useCallback(async (pageNumber: number) => {
    if (!pdfDoc || !canvasRef.current) return;

    try {
      const page = await pdfDoc.getPage(pageNumber);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (!context) return;

      // Adjust viewport based on view mode
      let viewport;
      if (viewMode === 'horizontal') {
        // For horizontal mode, rotate the page 90 degrees
        viewport = page.getViewport({ scale, rotation: 90 });
      } else {
        // For vertical mode, use normal orientation
        viewport = page.getViewport({ scale });
      }

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  }, [pdfDoc, scale, viewMode]);

  useEffect(() => {
    loadPDF();
  }, [loadPDF]);

  useEffect(() => {
    if (pdfDoc) {
      renderPage(currentPage);
    }
  }, [pdfDoc, currentPage, renderPage]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        goToPrevPage();
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        goToNextPage();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      } else if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomIn();
      } else if (event.key === '-') {
        event.preventDefault();
        zoomOut();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [goToPrevPage, goToNextPage, onClose, zoomIn, zoomOut]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-white text-xl">Loading PDF...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col z-50">
      {/* Header Controls */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
          >
            Close
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <span className="text-sm text-gray-300 hidden md:block">
            Use arrow keys to navigate • ESC to close • +/- to zoom • 📄/📖 to switch view
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* View Mode Controls */}
          <div className="flex items-center space-x-1 mr-4">
            <button
              onClick={() => setViewMode('vertical')}
              className={`px-3 py-2 rounded transition-colors ${
                viewMode === 'vertical' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
              title="Vertical View"
            >
              📄
            </button>
            <button
              onClick={() => setViewMode('horizontal')}
              className={`px-3 py-2 rounded transition-colors ${
                viewMode === 'horizontal' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
              title="Horizontal View"
            >
              📖
            </button>
          </div>
          
          {/* Zoom Controls */}
          <button
            onClick={zoomOut}
            className="bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
          >
            -
          </button>
          <span className="px-2">{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            className="bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto flex justify-center items-start p-4">
        <div className="relative">
          <canvas
            ref={canvasRef}
            className={`shadow-lg max-w-full h-auto ${
              viewMode === 'horizontal' ? 'max-h-[70vh]' : 'max-h-full'
            }`}
          />
          
          {/* Navigation buttons */}
          {currentPage > 1 && (
            <button
              onClick={goToPrevPage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              ←
            </button>
          )}
          
          {currentPage < totalPages && (
            <button
              onClick={goToNextPage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
            >
              →
            </button>
          )}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="bg-gray-800 text-white p-4 flex justify-center space-x-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 px-6 py-2 rounded transition-colors"
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 px-6 py-2 rounded transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
