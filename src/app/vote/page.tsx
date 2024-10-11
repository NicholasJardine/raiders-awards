// "use client";
// import ArrowIcon from '@/assets/arrow-right.svg';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import ServicesGrid from '@/components/services_grid';

// export default function Vote(){
//         const router = useRouter();
//         const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
//           router.push('/vote');
//           // Your logic here
//         };
//         const voteRef = useRef(null);
//         const { scrollYProgress } = useScroll({
//           target: voteRef,
//           offset: ["start end", "end start"]
//         });
      
//         const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
      
//         return (
//           <section
//             ref={voteRef}
//             className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] overflow-x-clip h-[100vh]'
//           >
            
//             <div className="container flex flex-col items-center text-center">
//             <Image
//                   src="/raiders-logo.png"
//                   alt="rugby Icon"
//                   width={200}
//                   height={200}
//                   className="mr-3 transform translate-y-1 mb-8"
//                 />
                
//                 {/* Image taking full width on small devices */}
//                 <div className="w-full md:w-auto">
//                   <Image
//                     src="/team.png"
//                     alt="rugby Icon"
//                     layout="responsive"
//                     width={200}
//                     height={200}
//                     className="w-full h-auto mb-8 rounded-lg"
//                     style={{
//                       objectFit: 'cover', // Ensures the image covers the full width
//                     }}
//                   />
//                 </div>

//               <div className="flex items-center justify-center">
//                 <Image
//                   src="/rugby.svg"
//                   alt="rugby Icon"
//                   width={40}
//                   height={40}
//                   className="mr-3 transform translate-y-1"
//                 />
//                 <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
//                   2024 Awards
//                 </h1>
//               </div>
              
//               <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4'>Vote for your winners</h3>

//               <div className="flex justify-start w-full px-4"> 
//                 <a className="text-[blue] mb-4" href="/">{`< back`}</a>
//               </div>
              
//               {/* <div className='min-h-[40px] w-full md:w-[100%] md:h-[224px] sm:h-[40px] flex items-center justify-center bg-[#575756] mb-8'> 
//                 <p>Select the best first team player</p>
//               </div> */}

//               {/* <p className="text-sm sm:text-sm md:text-lg text-[#FFFFFF] tracking-tight mt-6 sm:max-w-[90%] md:max-w-[60%]">
//               The Raiders Rugby Club Awards Ceremony will take place on October 20th. Make your pick for the following awards: Best First Team Player, Best Forward, Best Backline Player, Best Forward Coach, Best Backline Coach, Best Conditioning Coach, and Best Team Manager.
//               </p>
//               <button className='btn bg-[#B2B2B1] w-[40%] rounded-2xl mt-8' onClick={handleClick}>Start Voting</button> */}
//             </div>
//             <div className='min-h-[40px] w-full md:w-[100%] md:h-[224px] sm:h-[40px] flex items-center justify-center bg-[#575756] mb-8'> 
//                 <p className='text-white'>Select the best first team player</p>
//               </div>
//               <ServicesGrid/>
//               <div className="flex bg-[#1D1D1B] justify-center">
//               <button className='btn bg-[#B2B2B1] w-[60%] rounded-2xl mb-8' onClick={handleClick}>Next section</button>

//                 </div>
//           </section>
//         );
// }

"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import ServicesGrid from '@/components/services_grid';
import VotingForm from '@/components/voting_form';

export default function Vote(){
    const router = useRouter();
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        router.push('/vote');
    };
    const voteRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: voteRef,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            ref={voteRef}
            className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] min-h-screen overflow-x-clip'
        >
            <div className="container flex flex-col items-center text-center">
                <Image
                    src="/raiders-logo.png"
                    alt="rugby Icon"
                    width={200}
                    height={200}
                    className="mr-3 transform translate-y-1 mb-8"
                />
                
                <div className="w-full md:w-auto">
                    <Image
                        src="/team.png"
                        alt="rugby Icon"
                        layout="responsive"
                        width={200}
                        height={200}
                        className="w-full h-auto mb-8 rounded-lg"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <Image
                        src="/rugby.svg"
                        alt="rugby Icon"
                        width={40}
                        height={40}
                        className="mr-3 transform translate-y-1"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
                        2024 Awards
                    </h1>
                </div>
                
                <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4'>Vote for your winners</h3>

                <div className="flex justify-start w-full lg:w-[75%]px-4"> 
                    <a className="text-[blue] mb-4" href="/">{`< back`}</a>
                </div>

                {/* Full-width grey bar on small devices */}
                {/* <div className='w-screen md:w-[75%] min-h-[40px] flex items-center justify-center bg-[#575756] mt-4 mb-6'>
                    <p className='text-white'>Select the best first team player</p>
                </div> */}

                        <VotingForm/>
                {/* <div className="flex justify-center">
                    <button className='btn bg-[#B2B2B1] min-w-[200px] w-full max-w-[300px] py-2 rounded-2xl mb-8' onClick={handleClick}>Next section</button>
                </div> */}
            </div>
        </section>
    );
}
