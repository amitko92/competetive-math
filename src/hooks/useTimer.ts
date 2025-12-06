import { useEffect, useState } from "react";
import { useSetting } from "../stores/setting.store";

type UseTimerReturnType = {
    seconds: number,
    finshed: boolean,
    restartTimer: () => void
};

const useTimer = (): UseTimerReturnType => {

    const { timeLimitOfQuestion } = useSetting();
    const [finshed, setFinished] = useState(false);
    const [seconds, setSeconds] = useState(timeLimitOfQuestion);

    
    useEffect(() => {
        const interval = setInterval(() => {
            
            if (seconds <= 0) {
                console.log('Timer finished');
                setFinished(true);
                clearInterval(interval);
                return;
            }

            setSeconds((prev) => (prev - 1) >= 0 ? prev -1 : 0);
        }, 1000);

        return () => clearInterval(interval); // cleanup when unmounted
    }, []);

    function restartTimer() {
        
        setFinished(false);
        setSeconds(timeLimitOfQuestion);
    }

    return {
        seconds,
        finshed,
        restartTimer
    };
}

export default useTimer; 