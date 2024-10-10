"use client";
import ArrowIcon from '@/assets/arrow-right.svg'

import Lottie from "lottie-react";
import LottieAnimation from './waves';
// import animationData from '@/assets/waves.json'
import animationData from '@/assets/waves.json'

const LottieAnimations = () => {
  return (
    <section style={sectionStyle} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-hidden'>
              <div className='md:w-[478px] md:mr-16'> 
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text mt-8">Raiders Awards</h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">In an ocean of technology, let your business stand out. We craft innovative solutions that set you apart from the rest.</p>
        <div className="flex gap-1 items-center mt-[30px]">
          <button className="btn btn-primary">Our Services</button>
          <button className="btn btn-text gap-1"><span>Learn More</span> <ArrowIcon className='h-5 w-5'/></button>
        </div>
        </div>
        {/* <LottieAnimation/> */}
      <Lottie 
        animationData={animationData} 
        loop 
        style={lottieStyle}
      />
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "black",
  position: "relative",
};

const lottieStyle: React.CSSProperties = {
  width: "100vw", // Explicitly set to viewport width
  height: "100vh", // Explicitly set to viewport height
  position: "absolute",
  transform: "scale(1.75)",
  transformOrigin: "center", 
  objectFit: "cover", // Ensure the animation scales to cover the entire area
  overflow: "hidden",
};

export default LottieAnimations;
