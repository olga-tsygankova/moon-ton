import { useMemo } from 'react';

export const useIosDetector = () => {

  return useMemo(() => {

    if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || (window?.opera && opera?.toString() === `[object Opera]`));
  }, []);
};