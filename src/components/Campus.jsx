"use client"
import { useState, useEffect } from 'react'
import {
    CheckIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline'
import { UserStatsCampuses } from './UserStatsForCampuses'
import YouTube from "react-youtube";
import CTACampus from './CTACampus';

const tiers = [
    {
        name: 'Before CardPay',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: "The perfect plan if you're just getting started with our product.",
        features: [{
            name: 'Unlimited products',
            icon: '🤩'
        },
        {
            name: 'Unlimited subscribers',
            icon: '🤩'
        },
        {
            name: 'Basic analytics',
            icon: '🤩'
        },
        {
            name: 'Email support',
            icon: '🤩'
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
                name: 'Unlimited products',
                icon: '🤩'
            },
            {
                name: 'Unlimited subscribers',
                icon: '🤩'
            },
            {
                name: 'Advanced analytics',
                icon: '🤩'
            },
            {
                name: '24/7 support',
                icon: '🤩'
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
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Create cashless instant QR payments with CardPay at all the eateires within your campus and outside!',
        author: {
            name: 'Roel Aufderehar',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '6 min',
    },
    {
        id: 2,
        title: 'Events and Ticketing',
        href: '#',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        category: { name: 'Video', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'An all-in-one portal for all societies and clubs to publish their events offering greater traction, transparency and cashless ticketing.',
        author: {
            name: 'Brenna Goyette',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '4 min',
    },
    {
        id: 3,
        title: 'Fee Collection',
        href: '#',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        category: { name: 'Case Study', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Say goodbye to your fees and fine collection hassle! CardPay provides a complete school management system to streamline your fees collection.',
        author: {
            name: 'Daniela Metz',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            href: '#',
        },
        readingLength: '11 min',
    },
    {
        id: 4,
        title: 'Food Ordering',
        href: '#',
        date: 'Jan 18, 2020',
        datetime: '2020-01-18',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
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
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
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
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
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
    <div className="flex justify-center items-center my-4" key={tier.id}>
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
                    'text-base font-semibold leading-7'
                )}
            >
                {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
                <span
                    className={classNames(
                        tier.featured ? 'text-white' : 'text-gray-900',
                        'text-5xl font-bold tracking-tight'
                    )}
                >
                    {tier.priceMonthly}
                </span>
                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>
                    /month
                </span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                {tier.description}
            </p>
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
                                'h-6 w-5 flex-none text-xl',
                            )}
                            aria-hidden="true"
                        >           {feature.icon}
                        </span>
                        {feature.name}
                    </li>
                ))}
            </ul>
            <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                    tier.featured
                        ? 'bg-cyan-500 text-white shadow-sm hover:bg-cyan-400 focus-visible:outline-cyan-500'
                        : 'text-cyan-600 ring-1 ring-inset ring-cyan-200 hover:ring-indigo-300 focus-visible:outline-cyan-600',
                    'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                )}
            >
                Get started today
            </a>
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
                                                Create Your Campus Cash Free with CardPay's  <br />
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
                                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
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
                                <TierCard tier={tier} tierIdx={tierIdx} isLast={tierIdx === tiers.length - 1} />
                            ))}

                        </div>
                    </div>

                    <UserStatsCampuses />
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
                                            className="absolute -top-20 left-0 text-[20px] lg:text-[100px] text-cyan-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                                            CARDPAY
                                        </h1>
                                        <h1 className="pl-2 text-3xl font-bold border-l-8 border-purple-400 md:text-5xl dark:text-white">
                                            Hear From Other Campuses/Society
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
                    <CTACampus />


                </main>

            </div>
        </div>
    )
}
