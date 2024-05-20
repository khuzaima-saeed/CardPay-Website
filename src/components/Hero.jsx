"use client"
import { useId, useState, useEffect } from 'react'
import Image from 'next/image'
import MockUp from '../images/mockup.png';
import { Container } from '@/components/Container'
import GooglePlayBadge from '@/images/google-play-badge.png'
import AppleStoreIcon from '@/images/apple-store-icon.svg'
import Link from 'next/link';


function BackgroundIllustration(props) {
  let id = useId()


  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            {/* <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> */}
            <stop stopColor="#1A1AFF" />
            <stop offset="1" stopColor="#3333FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            {/* <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> */}
            <stop stopColor="#1A1AFF" />
            <stop offset="1" stopColor="#3333FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}


export function Hero() {
  const text = ["GenZ", "Students", "Teens", "YOU!"];
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % text.length);
        setFade(true);
      }, 500); // Match the duration of the fade-out animation
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 font-medium text-center lg:text-left">
              Revolutionising Finance For <span className={`text-gradient transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} ${currentText === text.length - 1 ? 'font-bold' : ''}`}>{text[currentText]}</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 lg:w-3/4 text-center lg:text-left">
              The all in one ultimate payment solution for all your financial activity. Send, Recieve, budget, set goals and much more with CardPay.
            </p>
            <br />

            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-center lg:justify-start'>
                <div className='flex justify-center items-center'>
                  <Link href="https://apps.apple.com/pk/app/cardpay/id1644127078">
                    <Image src={AppleStoreIcon} alt="Apple Store" />
                  </Link>
                  <Link href="https://play.google.com/store/apps/details?id=io.payment.cardpay">
                    <Image src={GooglePlayBadge} alt="Google Play" width={150} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="h-[448px] [mask-image:linear-gradient(to_bottom,white_60%,transparent)]">
              <Image src={MockUp} alt="logo" className='mx-auto priority h-100 w-100' width={500} />
            </div>
          </div>
        </div>
      </Container>
      
    </div>
  );
}