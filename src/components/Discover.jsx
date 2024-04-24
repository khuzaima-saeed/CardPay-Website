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
        <section className="relative overflow-hidden py-10 bg-white dark:bg-gray-800">

            <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <div className="relative z-40 w-full lg:rounded-tr-[80px] lg:rounded-bl-[80px]  overflow-hidden">
                                    <YouTube videoId="8tGGE1hKbpw" opts={opts} className='w-200 h-500'/>
                                </div>
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-purple-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                    About Us
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 border-purple-400 md:text-5xl dark:text-white">
                                    Our Story
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                In the bustling corridors of LUMS, a visionary group of students dreamed of a better way to pay. Fueled by innovation, they created CardPay—a digital payment solution for all. Even where banks were scarce, CardPay offered seamless transactions, replacing cumbersome cash with ease. It captured hearts and minds, transforming the university experience. Today, CardPay stands as a testament to youthful ingenuity, reshaping payments and offering a glimpse into a brighter, cashless future. Join the revolution and discover CardPay&apos;s boundless possibilities! 💳🎓🌟🚀
                            </p>
                            <a href="/"
                                className="px-4 py-3 text-gray-50 transition-all transform bg-purple-400 rounded-[80px] hover:bg-purple-500 dark:hover:text-gray-100 dark:text-gray-100 ">
                                Get the CardPay Experience Today! 💳📲
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"> */}
                                <Image src={Shamsi} alt="Shamsi" width={400} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a>Abdur Rehman Shamsi</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CEO</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Abdur drives the business strategy of the CardPay platform and brand.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"> */}
                                <Image src={Khuzaima} alt="Apple Store" width={410} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Khuzaima Saeed</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">CTO</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Khuzaima drives the technical strategy of the CardPay platform and product.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Michael Avatar"> */}
                                <Image src={Mustafa} alt="Apple Store" width={400} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Mustafa Khokhar</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Musatafa develops and maintains the front-end of our mobile application.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"> */}
                                <Image src={Afrasyab} alt="Apple Store" width={360} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Afrasyab Afzal</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Back-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Afrasyab develops and maintains the back-end of our application.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"> */}
                                <Image src={Nameer} alt="Apple Store" width={500} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Nameer Anjum</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Junior Back-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Nameer develops and maintains the back-end of our application along with the web-app.</p>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                {/* <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="Sofia Avatar"> */}
                                <Image src={Hamza} alt="Apple Store" width={450} />
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Hamza Bin Mubeen</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Front-end Developer</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Hamza develops and maintains the UI/UX of our application and develops front-end.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>












        </section>














    )
}
