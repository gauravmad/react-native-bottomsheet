import { useCallback, useRef, useState } from "react";
import BottomSheet,{BottomSheetRefProps} from "../components/BottomSheet";

export const useBottomSheet = () => {
    const ref = useRef<BottomSheetRefProps>(null);

    const scrollTo = useCallback((destination: number) => {
        ref?.current?.scrollTo(destination);
      }, []);
    
      const toggle = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
          scrollTo(0);
        } else {
          scrollTo(-400);
        }
      }, [scrollTo]);

    return{
        ref,
        scrollTo,
        toggle,
        BottomSheet: BottomSheet
    };  
};