import React, { useRef, useEffect } from 'react'
import '../css/About.css'
import Footer from '../components/Footer'
import PromoSection from '../components/AboutText'
import Reverspromo from '../components/Reverspromo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for the animated sections
  const promo1Ref = useRef(null);
  const reversPromoRef = useRef(null);
  const promo2Ref = useRef(null);

  useEffect(() => {
    // Animate PromoSection 1
    if (promo1Ref.current) {
      gsap.fromTo(
        promo1Ref.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: promo1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
         
          },
        }
      );
    }

    // Animate Reverspromo
    if (reversPromoRef.current) {
      gsap.fromTo(
        reversPromoRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: reversPromoRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
           
          },
        }
      );
    }

    // Animate PromoSection 2
    if (promo2Ref.current) {
      gsap.fromTo(
        promo2Ref.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: promo2Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
       
          },
        }
      );
    }
  }, []);

  return (
    <div className='about-container'>
      <div>
        <img src="./images/about_us_2.jpeg" alt="" />
      </div>
      <div className='about-text'>
        <h1>We Believe Demi-Fine Jewellery Is The Future</h1>
        <p>DEMIFINE FASHION PRIVATE LIMITED is the first demi-fine 
          jewellery brand that was born out of a desire to offer affordable
           luxury to fashion-conscious women. Our aim is to make women feel confident, 
           stylish, and empowered without breaking the bank. We strive to create a brand that 
           empowers women to look and feel their best every day.
        </p>
      </div>
      
      <div ref={promo1Ref}>
        <PromoSection
          imageUrl="./images/about_us_3.webp"
          heading="Palmonas X Shraddha Kapoor"
          description="The story of the
            union of Palmonas and Shraddha Kapoor is 
            a tale of a mutual passion for jewellery and Shraddha’s 
            growing affinity for the brand and its motive. The Bollywood star’s
            alliance with Palmonas as a co-founder is undoubtedly a pivotal point 
            in the legacy of our brand."
        />
      </div>
      <div ref={reversPromoRef}>
        <Reverspromo
          imageUrl="./images/about_us_4.webp"
          heading="Our Mission"
          description="“Luxury made affordable for modern
            youth“ is a mission that is driven by the belief that 
            everyone deserves to experience the pleasure and confidence 
            that come from owning and wearing luxurious jewellery, regardless
            of their income or social status."
        />
      </div>
      <div ref={promo2Ref}>
        <PromoSection
          imageUrl="./images/about_us_5.jpg"
          heading="About The Brand Store"
          description="We have been in business since 2022 as one of the first demi-fine jewellery brands.

We design all of our original and eye-catching products in-house at our Pune-based headquarters, PALMONAS, and we now ship to over 200 countries. If you’re in Pune, come say hello! Our store is located at Lane 5, Koregaon Park.

We choose fashionable designs with high-quality craftsmanship that can be worn every day. Our demi-fine styles are the pinnacle of self-expression because they were made to be stacked."
        />
      </div>

      <Footer />
    </div>
  )
}

export default About