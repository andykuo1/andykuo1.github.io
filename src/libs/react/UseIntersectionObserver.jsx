import { useEffect, useRef, useState } from 'react';

/**
 * @param {import('react').RefObject<HTMLElement>} elementRef
 * @param {IntersectionObserverInit['rootMargin']} rootMargin
 * @param {boolean} [shouldFreeze]
 * @returns {[boolean, import('react').Dispatch<import('react').SetStateAction<boolean>>]}
 */
export function useIntersectionObserver(
  elementRef,
  rootMargin,
  shouldFreeze = false
) {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(/** @type {IntersectionObserver|null} */ (null));
  useEffect(() => {
    if (visible && shouldFreeze) {
      return;
    }
    if (!observerRef.current) {
      let result = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry?.isIntersecting);
        },
        { rootMargin, threshold: 0 }
      );
      observerRef.current = result;
    }
    const observer = observerRef.current;
    const element = elementRef.current;
    if (element) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  });
  return [visible, setVisible];
}
