"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import illustration1 from "../public/illustration-intro.png";
import computer from "../public/icon-access-anywhere.svg";
import security from "../public/icon-security.svg";
import collaboration from "../public/icon-collaboration.svg";
import file from "../public/icon-any-file.svg";
import productive from "../public/illustration-stay-productive.png";
import continue1 from "../public/icon-arrow.svg";
import bgmobile from "../public/bg-curvy-mobile.svg";
import bgdesktop from "../public/bg-curvy-desktop.svg";
import quote from "../public/bg-quotes.png";
import pro1 from "../public/profile-1.jpg";
import pro2 from "../public/profile-2.jpg";
import pro3 from "../public/profile-3.jpg";
import "./components/css/styles.css";
import logo from "../public/logo.svg";
import location from "../public/icon-location.svg";
import email from "../public/icon-email.svg";
import phone from "../public/icon-phone.svg";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import EmailForm from "./components/emailform/emailform";

export default function Home() {
  return (
    <div
      className="bg-[#181D26]  m-auto lg:w-full bg-cover bg-center  "
      style={{ backgroundImage: "url('../public/bg-curvy-desktop.svg')" }}
    >
      <div className="  flex flex-col items-center">
        <Navbar />
        <Image src={illustration1} alt="illustration-into" width={300} />
        <div className="text-white lg:mx-[422px] mx-16 text-center my-8 ">
          <p className="text-2xl font-bold ">
            All your files in one secure locations, accesible anywhere.
          </p>
          <p className="text-xs my-5 mx-8">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-cyan-500 w-52 py-3 rounded-3xl text-xs hover:text-cyan-500 hover:hover:bg-white hover:font-bold">
            Get Started
          </button>
        </div>
        <section className=" lg:grid grid-cols-2  lg:w-[760px] ">
          <div className="text-white mx-14 text-center flex flex-col items-center  mt-10">
            <Image src={computer} alt="access-anywhere" width={50} />
            <div className="my-8 ">
              <p className="font-bold mb-3">Access your files, anywhere</p>
              <p className="text-xs">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
          </div>

          <div className="text-white mx-14 text-center flex flex-col items-center  my-10">
            <Image src={security} alt="security" width={50} />
            <div className="my-8 ">
              <p className="font-bold mb-3">Security you can trust</p>
              <p className="text-xs">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>

          <div className="text-white mx-14 text-center flex flex-col items-center  my-10">
            <Image src={collaboration} alt="collaboration" width={50} />
            <div className="my-8 ">
              <p className="font-bold mb-3">Real-time collaboration</p>
              <p className="text-xs">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
          </div>

          <div className="text-white mx-14 text-center flex flex-col items-center  my-10">
            <Image src={file} alt="file" width={50} />
            <div className="my-8 ">
              <p className="font-bold mb-3">Store any type of file</p>
              <p className="text-xs">
                Wether you`re sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </div>
        </section>

        <section className="lg:flex lg:flex-row lg:gap-20 flex flex-col  items-center ">
          <Image
            src={productive}
            alt="stay-productive"
            width={300}
            className="lg:w-[400px]"
          />
          <div className="text-white  text-xl text-cente flex flex-col items-center lg:w-[420px] my-10">
            <div className="my-8 mx-6 ">
              <p className="font-bold mb-3 ">
                Stay productive, wherever you are
              </p>
              <p className="text-xs">
                Never let location be an issue when accesing your files. Fylo
                has you coverd for all of your file storage needs.
              </p>
              <p className="text-xs mt-4">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <div className="m-8 ms-0">
                <a
                  href="/"
                  className="flex gap-2 text-xs text-teal-300 hover:text-[white]"
                >
                  <p>See how Fylo works</p>
                  <Image src={continue1} alt="continue" width={20} />
                </a>
                <hr className="w-32 mt-1 border-teal-300 font-bold" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="lg:flex lg:flex-row lg:w-[1024px] lg:m-auto lg:my-32">
        <div className="text-white w-[300px] bg-[#202A3A] m-auto p-5 my-5 rounded relative">
          <Image
            src={quote}
            alt="quote"
            width={20}
            className="ms-16 mt-10 absolute -top-14 -left-16 "
          />
          <p className="text-xs">
            Fylo has improved our team productivity by an order of magnitude.
            Since making theswitch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <Image
              src={pro1}
              alt="profile-1"
              width={30}
              className="rounded-full"
            />
            <div>
              <p className="text-xs font-bold">Satish Patel</p>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="text-white w-[300px] bg-[#202A3A] m-auto p-5 my-5 rounded ">
          <p className="text-xs">
            Fylo has improved our team productivity by an order of magnitude.
            Since making theswitch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <Image
              src={pro2}
              alt="profile-1"
              width={30}
              className="rounded-full"
            />
            <div>
              <p className="text-xs font-bold">Bruce McKenzie</p>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="text-white w-[300px] bg-[#202A3A] m-auto p-5 my-5 rounded ">
          <p className="text-xs">
            Fylo has improved our team productivity by an order of magnitude.
            Since making theswitch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="flex flex-row gap-4 mt-4 ">
            <Image
              src={pro3}
              alt="profile-1"
              width={30}
              className="rounded-full"
            />
            <div>
              <p className="text-xs font-bold">Iva Boyd</p>
              <p className="text-xs">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-8 w-80 bg-[#202A3A] m-auto p-8 my-5 text-white rounded-xl mt-36 lg:w-[760px] text-center  ">
        <p className="font-bold text-2xl">Get early access today</p>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        <EmailForm />
      </div>
      <div className="text-white m-auto lg:w-[1024px] w-60 text-xs mt-16 pb-16 flex flex-col gap-6  lg:flex-row">
        <div className="flex flex-col  gap-6">
          <Image src={logo} alt="logo" width={120} />
          <div className="flex flex-row gap-6 lg:w-[300px]">
            <div>
              <Image src={location} alt="location" width={30} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              ducimus sit numquam, fugiat tenetur nemo recusandae officia sequi
              illo.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:mt-16 lg:gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row  gap-6">
              <div>
                <Image src={phone} alt="location" width={12} />
              </div>
              <p>+1-543-123-4567</p>
            </div>
            <div className="flex flex-row  gap-6 ">
              <div>
                <Image src={email} alt="location" width={12} />
              </div>
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="text-white lg:mx-12 my-20 lg:my-0 lg:flex lg:flex-col lg:gap-5 ">
            <p className="hover:font-bold">About Us</p>
            <p className="hover:font-bold">Jobs</p>
            <p className="hover:font-bold">Press</p>
            <p className="hover:font-bold">Blog</p>
          </div>
          <div className="text-white lg:mx-12 my-20 lg:my-0 lg:flex lg:flex-col lg:gap-5">
            <p className="hover:font-bold">Contact Us</p>
            <p className="hover:font-bold">Terms</p>
            <p className="hover:font-bold">Privacy</p>
          </div>
          <div className="flex gap-3 pb-10  justify-center">
            <Facebook className="text-white border rounded-full p-1    hover:bg-cyan-500" />
            <Twitter className="text-white border rounded-full p-1 hover:bg-cyan-500" />
            <Instagram className="text-white border rounded-full p-1 hover:bg-cyan-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
