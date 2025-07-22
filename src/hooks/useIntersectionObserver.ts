import { useEffect, useRef, useCallback } from 'react';

/**
 * A custom React hook to observe the visibility of a DOM element using Intersection Observer.
 *
 * @param {Function} onVisible - Callback function to execute when the element becomes visible.
 * @param {IntersectionObserverInit} options - Options for the Intersection Observer.
 * @returns {React.MutableRefObject<HTMLElement | null>} A ref that should be attached to the DOM element you want to observe.
 */
const useIntersectionObserver = (
  onVisible: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  // Create a ref to hold the DOM element
  const elementRef = useRef<HTMLElement | null>(null);

  // Destructure options with default values
  const { threshold = 0.7, root = null, rootMargin = '0px' } = options;

  // Memoize the onVisible callback to prevent unnecessary re-runs of the effect
  // if onVisible is a new function on every render but its logic is stable.
  const memoizedOnVisible = useCallback(onVisible, [onVisible]);

  useEffect(() => {
    const currentElement = elementRef.current;

    // If there's no element to observe, just return
    if (!currentElement) {
      console.warn("Intersection Observer: No element attached to the ref.");
      return;
    }

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is intersecting (visible), call the onVisible callback
          if (entry.isIntersecting) {
            memoizedOnVisible(entry); // Pass the entry for more detailed info if needed
          }
        });
      },
      // Pass the observer options
      { threshold, root, rootMargin }
    );

    // Start observing the current element
    observer.observe(currentElement);

    // Cleanup function: disconnect the observer when the component unmounts or dependencies change
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect(); // Disconnect the observer entirely
    };
  }, [memoizedOnVisible, threshold, root, rootMargin]); // Re-run effect if these dependencies change

  // Return the ref to be attached to the DOM element
  return elementRef;
};

export default useIntersectionObserver;
