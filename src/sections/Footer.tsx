import logo from '@/assets/logosaas.png'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'


import Image from 'next/image';
export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        {/* <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute'>
        <Image className="relative" src={logo} alt='logo' height={40}/>
        </div> */}
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
        <SocialX/>
        <SocialInsta/>
        <SocialLinkedIn/>
        <SocialPin/>
        <SocialYoutube/>
        </div>
        <p className='mt-6'>&copy; 2024 BluWave DevHouse, Pty Ltd. All rights reserved</p>
      </div>
    </footer>
  );
};



// import logo from '@/assets/logosaas.png'
// import SocialX from '@/assets/social-x.svg'
// import SocialInsta from '@/assets/social-insta.svg'
// import SocialLinkedIn from '@/assets/social-linkedin.svg'
// import SocialPin from '@/assets/social-pin.svg'
// import SocialYoutube from '@/assets/social-youtube.svg'
// import Link from 'next/link';
// import LogoImage from '@/assets/BlueWaveLogo.png'

// import Image from 'next/image';
// export const Footer = () => {
//   return (
// <footer className="footer-container">
//       <div className="footer-wrap">
//         <div className="footer-links-container">
//           <div className="footer-links-wrapper">
//             <div className="footer-link-items">
//               <h1 className="footer-link-title">About Us</h1>
//               <Link href="/signin" className="footer-link">How it works</Link>
//               <Link href="/" className="footer-link">Testimonials</Link>
//               <Link href="/" className="footer-link">Careers</Link>
//               {/* <Link href="/" className="footer-link">Investors</Link>
//               <Link href="/" className="footer-link">Terms of Service</Link> */}
//             </div>
//             <div className="footer-link-items">
//     <h1 className="footer-link-title">Videos</h1>
//     <a href="/" className="footer-link">Submit Video</a>
//     <a href="/" className="footer-link">Ambassadors</a>
//     <a href="/" className="footer-link">Agency</a>
// </div>

// <div className="footer-link-items">
//     <h1 className="footer-link-title">Contact Us</h1>
//     <a href="/" className="footer-link">Contact</a>
//     <a href="/" className="footer-link">Support</a>
//     <a href="/signin" className="footer-link">Sponsorships</a>
// </div>

// <div className="footer-link-items">
//     <h1 className="footer-link-title">Social Media</h1>
//     <a href="/" className="footer-link">Instagram</a>
//     <a href="/" className="footer-link">Facebook</a>
//     <a href="/" className="footer-link">X</a>
// </div>

//           </div>
//         </div>
//         <section className="social-media">
//           <div className="social-media-wrap">
//             <Link href="/" className="social-logo">
//               <Image src={LogoImage.src} alt='LOGO' width={116} height={116}/>
//             </Link>
//             <small className="website-rights">LOGO © 2023</small>
//             <div className='flex justify-center gap-6 mt-6'>
//         <SocialX/>
//         <SocialInsta/>
//         <SocialLinkedIn/>
//         <SocialPin/>
//         <SocialYoutube/>
//         </div>
//           </div>
//         </section>
//       </div>
//     </footer>


    
//   );
// };
