'use client';

import React, { useState } from 'react';
import '@/app/globals.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';

export default function Contact() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "feea802d-ec3f-4c1c-9d24-d5c3f0d4cd1d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email sent successfully! We'll get back to you as soon as possible.");
        event.currentTarget.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error sending the email:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <> 
      <Header />
        <section className='py-10 flex flex-col items-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_86%)] overflow-x-clip shadow-md'>
          <h1 className='section-title text-7xl mb-4'>Get in Touch</h1>
          <div className="bg-white max-w-[75%] rounded-lg shadow-lg overflow-hidden">
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row items-stretch justify-between gap-10 p-8">
              <div className="basis-[48%] text-[#676767]">
                <h3 className="font-medium text-[#000F38] text-[25px] flex items-center mb-5">
                  Reach us here <Image src={'/envelope.svg'} width={35} height={35} className="ml-2" alt="Message Icon" />
                </h3>
                <p className="max-w-[450px] leading-[1.6] mb-6">
                  You're welcome to contact us using the details below. We're here to assist with any inquiries or support you may need. Feel free to reach out, and we'll respond as soon as possible!
                </p>
                <ul>
                  <li className="flex items-center my-5">
                    <Image src={'/paper-plane.svg'} width={32} height={32} className="mr-2" alt="Mail Icon" />
                    <span className="ml-2 text-md font-medium">support@rsatech.com</span>
                  </li>
                  <li className="flex items-center my-5">
                    <Image src={'/phone.svg'} width={32} height={32} className="mr-2" alt="Phone Icon" />
                    <span className="ml-2 text-md font-medium">+2766443839</span>
                  </li>
                  <li className="flex items-center my-5">
                    <Image src={'/whatsapp.svg'} width={32} height={32} className="mr-2" alt="Whatsapp Icon" />
                    <span className="ml-2 text-md font-medium">+2724436829</span>
                  </li>
                </ul>
              </div>

              <div className="basis-[48%]">
                <form onSubmit={onSubmit} className='space-y-6'>
                  <div>
                    <label className="block mb-2 text-[#000F38]">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="block w-full bg-gray-100 p-4 mb-2 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[#000F38]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter mobile number"
                      className="block w-full bg-gray-100 p-4 mb-2 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[#000F38]">Write your message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="block w-full bg-gray-100 p-4 mb-2 border border-gray-200 outline-none rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-white bg-[#000000] rounded-lg hover:bg-[#3a006b] transition flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Send Email
                  </button>
                </form>
                <span className="block mt-4 text-center text-gray-600">{result}</span>
              </div>
            </div>
          </div>
        </section>
      
      <Footer />
    </>
  );
}
