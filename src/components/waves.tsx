// components/LottieAnimation.js
import Lottie from "lottie-react";
import animationData from '@/assets/coder2.json'

const LottieAnimation = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
