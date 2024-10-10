"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LottieAnimation from '@/components/waves';

export const WhyUs = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className=" bg-white overflow-x-clip"
    >
      <div className="container mx-auto px-6">
        <div className="md:flex items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#183EC2] mt-6">
              Why BluWave?
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <Image src="/cost-effective.svg" alt="Cost Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Cost:</strong> Our lean team structure ensures overhead costs are kept to a minimum. You get high-quality development without the bloated expenses that come with big corporate firms.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/transparency.svg" alt="Transparency Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Transparency:</strong> We believe in clear communication and straightforward pricing. No hidden fees, no surprises—just honest collaboration, so you know exactly what you’re getting and when.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Image src="/innovation.svg" alt="Innovation Icon" width={40} height={40} />
                <div className="text-[#4A5568]">
                  <strong className="text-[#183EC2]">Innovation:</strong> We don’t just build software; we create solutions. Our team thrives on challenging the status quo, using the latest technology to turn your ideas into cutting-edge systems.
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center relative">
            <motion.div style={{ translateY }}>
              <LottieAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
