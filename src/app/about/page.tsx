// pages/about.tsx
import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className=" md:flex md:justify-between grid grid-cols-1 mx-auto md:p-14 md:space-x-3">
      <Image
        src={"/about1.jpeg"}
        width={700}
        height={700}
        alt="about image"
        priority
        className="md:mt-0 mt-9"
      />

      <section className="flex flex-col space-y-3">
        <section className=" md:h-[500px] md:w-[500px] py-10">
          <div className="container mx-auto px-11">
            <h2 className="text-5xl font-bold text-center mb-10">About Us</h2>
            <p className="text-base text-gray-700  mb-6">
              We are a team of passionate creators, writers, and designers who
              believe in the power of sharing knowledge and inspiration. Our
              goal is to bring valuable insights on fashion, design, and more to
              help our audience stay updated and creative.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              With a commitment to creativity and excellence, we curate content
              that inspires, educates, and entertains. Our platform is a place
              for people to discover new trends, ideas, and perspectives.
              Whether you&apos;re a budding designer or a fashion enthusiast, we
              have something for you.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-black h-[500px]  md:w-[500px]  ">
          <div className="container mx-auto py-14 px-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Contact Us
            </h2>
            <form className="max-w-lg mx-auto shadow-lg rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className=" font-semibold text-white text-base"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full mb-3 border-b-2 border-gray-300  bg-transparent focus:outline-none focus:ring-0 focus:border-red-600 "
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mb-3 w-full border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-red-600  bg-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="text-base font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={1}
                  className="mb-3 w-full border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-red-600  bg-transparent"
                />
              </div>
              <button
                type="submit"
                className=" text-base hover:text-red-600  text-white "
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
