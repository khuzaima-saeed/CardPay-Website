"use client";
import { useState, useEffect } from 'react';
import Nameer from '@/images/nameer.jpeg';
import Hamza from '@/images/hamza.jpeg';
import Image from 'next/image';
import Mustafa from '@/images/mustafa.jpeg';
import "../styles/index.css";

const UserStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
      { user: 'Nameer', review: 'Yeh toh upgrade ka bhi upgrade hai 🐐', image: Nameer },
      { user: 'Hamza', review: 'Love the concept of spending account 💖', image: Hamza },
      { user: 'Mustafa', review: 'My payment took 0.6 seconds! ⚡', image: Mustafa },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }, [reviews.length]);
  
    return (
    <>
    <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-100 mt-6">User Stories</h1>
      <div className="fresnel-container fresnel-greaterThanOrEqual-lg">
        <div className="testimonial-container row">
            
          <div className="testimonial-cards-container col-lg-6 col-12">
            <div className="testimonial-images-wrapper">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`testimonial-image ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    zIndex: index === currentIndex ? 2 : 1,
                    transform: index === currentIndex ? 'translate(-50%, -50%)' : `translate(${index < currentIndex ? '-75%' : '-25%'}, -50%) scale(0.82)`,
                    boxShadow: index === currentIndex ? 'rgba(0, 0, 0, 0.4) 30px 0px 20px -20px, rgba(0, 0, 0, 0.4) -30px 0px 20px -20px' : 'unset',
                    cursor: index === currentIndex ? 'unset' : (index < currentIndex ? 'w-resize' : 'e-resize'),
                  }}
                >
                  <div className="testimonial-card" style={{ backgroundImage: `url(${review.image.src})` }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="testimonial-text-container text-left col-lg-6 col-12">
            <h6 className="subheading_text testimonial-headline light_grey_text">{reviews[currentIndex].review}</h6>
            <p className="author-info paragraph_text light_black_text">{reviews[currentIndex].user}</p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default UserStories;
