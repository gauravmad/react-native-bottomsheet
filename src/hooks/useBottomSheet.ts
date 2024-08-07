import { useCallback, useRef } from "react";
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
          scrollTo(-200);
        }
      }, [scrollTo]);

    return{
        ref,
        scrollTo,
        toggle,
        BottomSheet: BottomSheet
    };  
};