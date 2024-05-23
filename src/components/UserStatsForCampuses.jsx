import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const stats = [
    { id: 1, name: 'Users', value: 4000, suffix: '+' },
    { id: 2, name: 'Transaction Volume Processed', value: 21.8, suffix: 'M' },
    { id: 3, name: 'Satisfaction', value: 100, suffix: '%' },
    { id: 4, name: 'Number of Vendors/Club', value: 52, suffix: '+' },
];

export function UserStatsCampuses() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isVisible, hasAnimated]);

    return (
        <div ref={sectionRef} className="bg-white py-5 sm:py-5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Trusted by creators worldwide
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet consect adipisicing possimus.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                                    {hasAnimated ? (
                                        <CountUp
                                            end={stat.value}
                                            duration={2}
                                            suffix={stat.suffix}
                                            decimals={stat.id === 2 ? 1 : 0}
                                        />
                                    ) : (
                                        stat.value + stat.suffix
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
