import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/rocket.json'
import { useLottie } from 'lottie-react';


const MyLottie = () => {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // Slows down to half speed
    }
  }, []);

  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie
        animationData={animationData}
        loop={true}
        lottieRef={lottieRef} // Assign the ref here
      />
    </div>
  );
};

export default MyLottie;
