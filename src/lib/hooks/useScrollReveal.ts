'use client';

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (
  target: RefObject<Element | null> | string,
  options: gsap.TweenVars = {}
) => {
  useEffect(() => {
    const animations: gsap.core.Tween[] = [];

    if (typeof target === 'string') {
      const elements = gsap.utils.toArray<Element>(target);
      elements.forEach(element => {
        const anim = gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
          ...options,
        });
        animations.push(anim);
      });
    } else if (target.current) {
      const element = target.current;
      const anim = gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        ...options,
      });
      animations.push(anim);
    }

    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [target, options]);
};
