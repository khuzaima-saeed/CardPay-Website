'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Smooth transactions with CardPay!',
    body: 'I\'ve been using CardPay for all my money transfers, and it\'s been a breeze! Whether it\'s sending money to friends or paying bills, CardPay makes it fast, secure, and hassle-free.',
    author: 'Kamran Ali',
    rating: 5,
  },
  {
    title: 'Convenient payments for businesses!',
    body: 'As a business owner, CardPay has been a game-changer for me. I can easily accept payments from customers and manage transactions seamlessly. It\'s made running my business so much easier!',
    author: 'Zain Hamid',
    rating: 5,
  },
  {
    title: 'Effortless food ordering with CardPay!',
    body: 'CardPay\'s food ordering feature is fantastic! I love how I can browse through various restaurants, place orders, and even track deliveries right from the app. It\'s made ordering food a breeze!',
    author: 'Sara Saif',
    rating: 5,
  },
  {
    title: 'Never miss a beat with CardPay!',
    body: 'Thanks to CardPay, I never miss out on any events! Whether it\'s concerts, movies, or sports games, I can easily browse, book tickets, and get exclusive deals—all in one place!',
    author: 'Ali Ahmed',
    rating: 5,
  },
  {
    title: 'All-in-one solution with CardPay!',
    body: 'CardPay is my go-to app for all my financial needs. It\'s like having a bank, a restaurant directory, and an event planner—all in one convenient app! I couldn\'t ask for more.',
    author: 'Zoya Khan',
    rating: 5,
  },
  {
    title: 'Efficient and reliable!',
    body: 'CardPay has made managing my finances a breeze. From transferring money to paying bills, everything is so smooth and reliable. It\'s definitely a must-have app!',
    author: 'Farhan Khan',
    rating: 5,
  },
  {
    title: 'Simplified money management!',
    body: 'I love how CardPay simplifies money management. With its user-friendly interface and secure transactions, I can easily keep track of my expenses and stay on top of my finances.',
    author: 'Ayesha Malik',
    rating: 5,
  },
  {
    title: 'The perfect payment solution!',
    body: 'CardPay has become my go-to payment solution for everything—from shopping online to splitting bills with friends. It\'s fast, convenient, and secure!',
    author: 'Ahmed Khan',
    rating: 5,
  },
  {
    title: 'Great for budgeting!',
    body: 'With CardPay, budgeting has never been easier. I can set spending limits, track my expenses in real-time, and even categorize transactions. It\'s helped me stay financially organized!',
    author: 'Saba Fatima',
    rating: 5,
  },
  {
    title: 'Exceptional customer service!',
    body: 'I had an issue with a transaction, and the CardPay support team resolved it promptly and professionally. Their customer service is top-notch!',
    author: 'Bilal Ahmed',
    rating: 5,
  },
  {
    title: 'Innovative features!',
    body: 'CardPay continually surprises me with its innovative features. From AI-powered spending insights to customizable savings goals, it\'s truly a next-level financial app!',
    author: 'Sadia Khan',
    rating: 5,
  },
  {
    title: 'Highly recommended!',
    body: 'I recommend CardPay to all my friends and family. It\'s changed the way I manage my money, and I can\'t imagine life without it!',
    author: 'Nadia Ali',
    rating: 5,
  },
  {
    title: 'Safe and secure!',
    body: 'I trust CardPay with all my financial transactions. Its advanced security features give me peace of mind knowing that my money and personal information are always protected.',
    author: 'Usman Mahmood',
    rating: 5,
  },
  {
    title: 'A must-have app!',
    body: 'Whether you\'re a student, a business owner, or just someone who wants to manage their finances better, CardPay is a must-have app. It\'s simple, convenient, and incredibly useful!',
    author: 'Mariam Khan',
    rating: 5,
  },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-purple-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Discover Financial Freedom with CardPay.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
        Embrace the future of finance and unlock new possibilities with CardPay. From seamless transactions to convenient food ordering and event ticket booking, CardPay is reshaping the way you manage your money.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
