"use client";
import Lottie from "lottie-react";
import animationData from '@/assets/waves.json';

const InvertedWaves = () => {
  return (
    <section style={sectionStyle} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_top_left,#183EC2,#EAEEFE_86%)] overflow-x-hidden'>
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
  transform: "scaleX(1.75) rotate(180deg)", // Rotate 180 degrees to flip upside down
  transformOrigin: "center", 
  objectFit: "cover", // Ensure the animation scales to cover the entire area
  overflow: "hidden",
};

export default InvertedWaves;
