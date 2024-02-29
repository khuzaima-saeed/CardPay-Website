// import { AppStoreLink } from '@/components/AppStoreLink'
// import { CircleBackground } from '@/components/CircleBackground'
// import { Container } from '@/components/Container'
'use client'
import React, { useState } from 'react';
import Video from 'next-video';
import CardPayVideo from '/videos/cardpay-video.mp4';
import {Layout} from './Layout';

export function CallToAction() {


  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setVideoPlaying(true);
  };







  return (
    // <section
    //   id="get-free-shares-today"
    //   className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    // >
    //   <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
    //     <CircleBackground color="#fff" className="animate-spin-slower" />
    //   </div>
    //   <Container className="relative">
    //     <div className="mx-auto max-w-md sm:text-center">
    //       <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
    //         Get your first tips today
    //       </h2>
    //       <p className="mt-4 text-lg text-gray-300">
    //         It takes 30 seconds to sign up. Download the app and create an
    //         account today and we’ll send you a tip guaranteed to double your
    //         first investment.
    //       </p>
    //       <div className="mt-8 flex justify-center">
    //         <AppStoreLink color="white" />
    //       </div>
    //     </div>
    //   </Container>
    // </section>







    <Layout>
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-20">


      <div className="flex flex-col justify-center gap-y-0">
        <div className="w-full">
          <Video src={CardPayVideo} width="100%" height={415} autoplay muted/>
        </div>


      <h1 className='text-xl text-white font-bold'>
        Our Story
      </h1>
      <p className='text-white'>
      In the bustling corridors of LUMS, where cash once reigned supreme, a visionary group of students dared to dream of a better way to pay. Fueled by a passion for innovation and a desire to revolutionize the status quo, they embarked on a journey to create CardPay—a groundbreaking digital payment solution for all.

      In a world where traditional banking infrastructure was often out of reach, CardPay emerged as a beacon of hope, offering seamless Point of Sale transactions even in institutes devoid of banks. Gone were the days of wrestling with cumbersome cash transactions; with CardPay, payments became effortless, paving the way for a new era of convenience and efficiency.

      As word of CardPay spread like wildfire, it captured the hearts and minds of students and businesses alike. With a simple swipe or tap, transactions were executed with unparalleled ease, transforming the university experience for all who embraced its innovative approach.

      Today, CardPay stands tall as a testament to the power of youthful ingenuity. It has reshaped the landscape of payments, offering a glimpse into a future where transactions are smoother, life is simpler, and opportunities abound. Join us in embracing the cashless revolution and discover the boundless possibilities of CardPay—the future of digital payments is here, and it&apos;s brighter than ever before! 💳🎓🌟🚀
      </p>

    </div>




    </section>
    </Layout>



    











  )
}
