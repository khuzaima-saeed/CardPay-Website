import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import MockUp from '../images/mockup.png';

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { PlayStoreLink } from '@/components/PlayStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import logoBunker from '@/images/partners/bunkers.png'
import logoChopChop from '@/images/partners/chopChop.png'
import logoFinja from '@/images/partners/Finja.png'
import logoFrooti from '@/images/partners/Frooti.png'
import logoJammin from '@/images/partners/jamminJava.png'
import logoLUMS from '@/images/partners/LUMS.png'
import logoMeezan from '@/images/partners/meezan.png'
import logoPaypro from '@/images/partners/paypro.png'
import GooglePlayIcon from '@/images/google-play.svg'
import AppleStoreIcon from '@/images/apple-store-icon.svg'


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
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-gray-900 font-medium text-center lg:text-left">
            Cash Miss Karao, Payment Sirf CardPay!
            </h1>
            <p className="mt-6 text-lg text-gray-700 lg:w-3/4 text-center lg:text-left">
            CardPay is on a journey to revolutionize the financial landscape of Pakistan and its institutes
            </p>
            <br />

            

            {/* <div className="flex flex-col mt-8 lg:mt-12">
              <div className='items-stretch'>
                <p className="mt-0 mb-2 text-violet-500 font-semibold">
                  Download the app now!
                </p>
              </div>
              <br/>
              <div className="flex items-center">
                <Image src={GooglePlayIcon} alt="logo" className="w-40 h-10 p-0 m-0" />
                <Image src={AppleStoreIcon} alt="logo" className="w-40 h-10 p-0 m-0" />
              </div>
            </div> */}



            {/* <div className='flex flex-col gap-y-1'>
              <div className='text-violet-500 font-semibold'>
              Download the app now! text center on mobile and justify center icons on mobile
              </div>

              <div className='flex gap-x-1'>
                <Image src={GooglePlayIcon} alt="logo"  />
                <Image src={AppleStoreIcon} alt="logo" />
              </div>
            </div> */}

            <div className='flex flex-col gap-y-2'>
              <div className='text-violet-500 font-semibold text-center lg:text-left'>
                Download the app now!
              </div>

              <div className='flex justify-center lg:justify-start gap-x-1'>
                <Image src={GooglePlayIcon} alt="Google Play" />
                <Image src={AppleStoreIcon} alt="Apple Store" />
              </div>
            </div>



            <div>
              
            </div>

            




          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                <Image src={MockUp}  alt="logo" className='mx-auto max-w-[366px]" priority' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
