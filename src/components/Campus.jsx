"use client"
import { useState, useEffect } from 'react'
import {
    CheckIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline'
import { UserStatsCampuses } from './UserStatsForCampuses'
import YouTube from "react-youtube";
import CTACampus from './CTACampus';
import QR from '../images/QR.png';

const tiers = [
    {
        name: 'Before CardPay',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: "The perfect plan if you're just getting started with our product.",
        features: [{
            name: 'Cash change issues',
            detail: 'Cash is king, but it is also a burden! It’s risky (theft), inconvenient (carrying it), and invisible (spending is hard to track). ',
            // sad face
            icon: '😥'
        },
        {
            name: 'Hassle of managing societies',
            detail: `Clubs are great, paperwork isn't! From approvals to finances, managing student groups takes time. We need a simpler system for student leaders & less admin stress for us!`,
            icon: '🤯'
        },
        {
            name: 'Limited access to financial services',
            detail: `Limited access to banking & credit building tools hinders budgeting, saving, & future planning. We need solutions!`,
            icon: '😞'
        },
        {
            name: 'Low financial awareness',
            detail: `Financial literacy is a basic skill, lack of financial knowledge can leave you unprepared for the future.`,
            icon: '😩'
        }
        ],
        featured: false,
    },
    {
        name: 'After CardPay',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$49',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            {
                name: 'QR based instant payments',
                detail: 'Say goodbye to cash 👋 Make online and offline cashless payments on the go with CardPay',
                icon: '🤩'
            },
            {
                name: 'All-in-one solution',
                detail: 'From events to ticketing, fee collection to fund raising, CardPay is the all-in-one solution for all your campus needs. Societies, clubs and event management is so much easier to manage with CardPay!',
                icon: '😁'
            },
            {
                name: 'Financial Freedom',
                detail: 'With our banking-as-platform service, users have access to a range of lending, savings, insurance and investments products and services.',
                icon: '🤑'
            },
            {
                name: 'Embedded Financial Literacy',
                detail: 'We have creatively embedded financial literacy objectives into our CardPay app suited to the Gen Z student population. Learning is fun!',
                icon: '🤠'
            },
            {
                name: 'Data Insights',
                detail: 'Get insights into student buying habits and profiles with our state of the art data and insights feature',
                icon: '🥳'
            },
        ],
        featured: true,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const blogPosts = [
    {
        id: 1,
        title: 'QR Payments',
        href: '#',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { name: 'Features', href: '#' },
        imageUrl:
        
            'https://i.ibb.co/F7wTdBP/QR.png',
        preview:
            'Create cashless instant QR payments with CardPay at all the eateires within your campus and outside!',
    },
    {
        id: 2,
        title: 'Events and Ticketing',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { name: 'Video', href: '#' },
        imageUrl:
            'https://i.ibb.co/1TJ1SFg/Event.png',
        preview:
            'An all-in-one portal for all societies and clubs to publish their events offering greater traction, transparency and cashless ticketing.'
    },
    {
        id: 3,
        title: 'Fee Collection',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { name: 'Case Study', href: '#' },
        imageUrl:
            'https://i.ibb.co/vzpqJf0/Fee.png',
        preview:
            'Say goodbye to your fees and fine collection hassle! CardPay provides a complete school management system to streamline your fees collection.'
    },
    {
        id: 4,
        title: 'Food Ordering',
        href: '#',
        date: 'Jan 18, 2020',
        datetime: '2020-01-18',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://i.ibb.co/4ZcfRZT/Food.png',
        preview:
            'Allow online food ordering services from your favorite eateries anytime, anywhere. More like an internal foodpanda for your campus!',
    },
    {
        id: 5,
        title: 'Data Analytics',
        href: '#',
        date: 'Jan 18, 2020',
        datetime: '2020-01-18',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://i.ibb.co/wMywVXp/Data.png',
        preview:
            'Get insights into student buying habits and profiles with our state of the art data and insights feature',
    },
    {
        id: 6,
        title: 'Financial Literacy',
        href: '#',
        date: 'Jan 18, 2020',
        datetime: '2020-01-18',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://i.ibb.co/6rRMmyG/FL.png',
        preview:
            'Equip your students with financial literacy program co-designed using the State Bank Financial Literacy program objectives embedded within the CardPay app.'
    },

]

const opts = {
    height: "300",
    width: "600",
    playerVars: {
        autoplay: 0,
    },
};

const TierCard = ({ tier, tierIdx, isLast }) => (
    <div className="flex justify-center items-center my-4">
        <div
            className={classNames(
                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured
                    ? ''
                    : tierIdx === 0
                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                        : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
        >
            <h3
                id={tier.id}
                className={classNames(
                    tier.featured ? 'text-cyan-400' : 'text-cyan-600',
                    'text-xl font-bold leading-7'
                )}
            >
                {tier.name}
            </h3>
            
            <ul
                role="list"
                className={classNames(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                )}
            >
                {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                        <span
                            className={classNames(
                                'h-8 w-8 flex-none text-4xl flex items-center justify-center',
                            )}
                            aria-hidden="true"
                        >           {feature.icon}
                        </span>
                        <span className={`${tier.featured ? 'text-cyan-300' : 'text-gray-900'} text-xl font-semibold`}>
                            {feature.name} <br/> <span className={`${tier.featured ? 'text-cyan-500' : 'text-gray-600'} text-sm`}>
                        {feature.detail}</span>
                        </span>
                        
                    </li>
                ))}
            </ul>
        </div>
        {!isLast && (
            <div className="flex justify-center items-center mx-4">
                <span className="text-2xl font-bold text-gray-700">VS</span>
            </div>
        )}
    </div>
);

export function Campus() {
    const FeaturesList = ["QR Payments", "Events and Ticketing", "Fee Collection", "Fund Raising", "Data Analytics", "Financial Literacy"];
    const [currentText, setCurrentText] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentText((prev) => (prev + 1) % FeaturesList.length);
                setFade(true);
            }, 500); // Match the duration of the fade-out animation
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <main>
                    {/* Testimonial section */}
                    <div className="pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 lg:hidden" />
                                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                                    <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                                        <img
                                            className="object-cover lg:h-full lg:w-full"
                                            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                                   
                                        <div className="relative z-10">
                                            <p className="mt-6 text-3xl font-bold text-gray-900">
                                                Create Your Campus Cash Free with CardPay&apos;s <br/>
                                                <span className={`text-gradient text-4xl transition-opacity ease-in duration-500 ${fade ? 'opacity-100' : 'opacity-0'} ${currentText === FeaturesList.length - 1 ? 'font-bold' : ''}`}>{FeaturesList[currentText]}</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog section */}
                    <div className="relative py-16 sm:py-24 lg:py-32">
                        <div className="relative">
                            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                                <h2 className="text-4xl font-semibold text-cyan-600">Features that make your campus cashless</h2>
                            </div>
                            <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                                {blogPosts.map((post) => (
                                    <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div className="flex-shrink-0">
                                            <img className="h-96 w-full object-cover" src={post.imageUrl} alt="" />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <a href={post.href} className="mt-2 block">
                                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                    <p className="mt-3 text-base text-gray-500">{post.preview}</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative isolate mt-5 px-6 sm:mt-5 lg:px-8">

                        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                            <h2 className="text-3xl font-semibold leading-7 text-cyan-600">Engage your students with CardPay</h2>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                            {tiers.map((tier, tierIdx) => (
                                <TierCard tier={tier} tierIdx={tierIdx} isLast={tierIdx === tiers.length - 1} key={tier.id} />  
                            ))}

                        </div>
                    </div>

                    <UserStatsCampuses />
                    <section className="flex items-center py-2 xl:h-screen font-poppins dark:bg-gray-800 ">
                        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                            <div className="flex flex-wrap ">
                                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                    <div className="relative">
                                        <div className="relative z-40 w-full lg:rounded-tr-[80px] lg:rounded-bl-[80px]  overflow-hidden">
                                            <YouTube videoId="7Hf7kAIdBv0" opts={opts} className='w-200 h-500' />
                                        </div>
                                        <div
                                            className="absolute z-10 hidden w-full h-full bg-cyan-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                                    <div className="relative">
                                        <h1
                                            className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-cyan-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                            CARDPAY
                                        </h1>
                                        <h1 className="pl-2 text-3xl font-bold border-l-8 border-cyan-400 md:text-5xl dark:text-white">
                                        Hear from other clubs
                                        </h1>
                                    </div>
                                    <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                        Have a listen to what student clubs like yours like about CardPay 💳🎓🌟🚀
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CTACampus />


                </main>

            </div>
        </div>
    )
}
