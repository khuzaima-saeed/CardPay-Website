'use client'
import React from 'react';
import Image from 'next/image'
import Shamsi from '@/images/shamsi.jpeg';
import Khuzaima from '@/images/khuzaima.jpeg';
import Mustafa from '@/images/mustafa.jpeg';
import Afrasyab from '@/images/afrasyab.jpeg';
import Nameer from '@/images/nameer.jpeg';
import Hamza from '@/images/hamza.jpeg';
import YouTube from "react-youtube";

const opts = {
    height: "300",
    width: "600",
    playerVars: {
        autoplay: 0,
    },
};

export function Discover() {
    return (
        <section className="relative overflow-hidden py-10">

            <section className="flex items-center py-10 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <div className="relative z-40 w-full lg:rounded-tr-[80px] lg:rounded-bl-[80px]  overflow-hidden">
                                    <YouTube videoId="8tGGE1hKbpw" opts={opts} className='w-200 h-500' />
                                </div>
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-cyan-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-cyan-400 md:text-5xl dark:text-white">
                                    Our Story
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                In the bustling corridors of LUMS, a visionary group of students dreamed of a better way to pay. Fueled by innovation, they created CardPay—a digital payment solution for all. Even where banks were scarce, CardPay offered seamless transactions, replacing cumbersome cash with ease. It captured hearts and minds, transforming the university experience. Today, CardPay stands as a testament to youthful ingenuity, reshaping payments and offering a glimpse into a brighter, cashless future. Join the revolution and discover CardPay&apos;s boundless possibilities! 💳🎓🌟🚀
                            </p>
                            <a href="/"
                                className="px-4 py-3 text-gray-50 transition-all transform bg-cyan-400 rounded-[80px] hover:bg-cyan-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                Get the CardPay Experience Today! 💳📲
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}
