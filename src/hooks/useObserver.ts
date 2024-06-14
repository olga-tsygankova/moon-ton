import { MutableRefObject, useCallback, useEffect, useMemo, useRef } from 'react';

type UseObserver = (
  onEntry: (entry: IntersectionObserverEntry) => void,
  triggerRef?: MutableRefObject<any>
) => {

  createObserver: () => VoidFunction,
  ref: MutableRefObject<any>
}

export const useObserver: UseObserver = (onEntry, triggerRef) => {
  const ref = useRef(null);

  const finalRef = useMemo(() => triggerRef ?? ref, [triggerRef, ref]);

  const createObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(onEntry);
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Триггерить событие, когда элемент виден на 50% или больше
      },
    );

    if (finalRef.current) {
      observer.observe(finalRef.current);
    }

    return () => {
      if (finalRef.current) {
        observer.unobserve(finalRef.current);
      }
    };
  }, [onEntry, finalRef]);

  return { createObserver, ref };
};
