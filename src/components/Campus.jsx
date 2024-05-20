import {
    CheckIcon,
    FaceSmileIcon
} from '@heroicons/react/24/outline'

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
        category: { name: 'QR', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
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
        title: 'Fund Raising',
        href: '#',
        date: 'Jan 18, 2020',
        datetime: '2020-01-18',
        category: { name: 'Article', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1679&q=80',
        preview:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
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
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
]

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
                                'h-6 w-5 flex-none'
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
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">

                <main>

                    {/* Testimonial section */}
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                            <div className="relative lg:-my-8">
                                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
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
                                    <blockquote>
                                        <div>
                                            <svg
                                                className="h-12 w-12 text-white opacity-25"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                            </svg>
                                            <p className="mt-6 text-2xl font-medium text-white">
                                                CARDPAY for Cashless Campuses
                                            </p>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog section */}
                    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
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
                                                <p className="text-sm font-medium text-cyan-600">
                                                    <a href={post.category.href} className="hover:underline">
                                                        {post.category.name}
                                                    </a>
                                                </p>
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

                </main>

            </div>
        </div>
    )
}
