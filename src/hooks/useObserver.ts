import { MutableRefObject, useCallback, useMemo, useRef } from 'react';

type UseObserver = (
  onEntry: (entry: IntersectionObserverEntry) => void,
  triggerRef?: MutableRefObject<any>
) => {

  createObserver: () => VoidFunction,
  ref: MutableRefObject<any>
}


/**
 * @example  const { createObserver, ref: bottomRef } = useObserver(cb, extRef); useEffect(() =>  createObserver(), [createObserver]);
 */
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
        threshold: 0.9, // Триггерить событие, когда элемент виден на 50% или больше
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

  return { createObserver, ref: finalRef };
};
