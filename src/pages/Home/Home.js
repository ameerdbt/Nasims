import React, { useState, useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import HeroItem from './HeroItem'
import aboutImage from '../../assets/about-img.png'
import './home.scss'

export const Home = () => {
    const heroData = [
        {
            bg: '#FFFBF6',
            em: 'Welcome to the',
            h1: 'National Social Investment Management Portal',
            p: 'The central management system for the Federal Ministry of Humanitarian Affairs, Disaster Management and  Social Development.',
            img: '/hero-image1.jpg'
        },
        {
            bg: '#F2FCF9',
            em: 'Please note',
            h1: 'Registration for N-Power Batch C is now Closed!',
            p: 'The central management system for the Federal Ministry of Humanitarian Affairs, Disaster Management and  Social Development.',
            img: '/hero-image2.jpg'
        },
        {
            bg: '#FCF4F2',
            em: 'Read about',
            h1: 'How NASIMS is impacting lives on a global level.',
            p: 'The N-Power Programme is a job creation and skills empowerment programme of the Federal Government of Nigeria…',
            img: '/hero-image3.jpg'
        }
    ];
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const next = (count + 1) % 3;
            setCount(next);
        }, 10000);
        return () => clearInterval(interval);
    }, [count]);

    const moveLeft = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const moveRight = () => {
        if (count < 2) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <main className="main">
                <section className="position-relative">
                    {heroData.map((item, index) => {
                        let customClass = '';
                        if (index === count) {
                            customClass = 'hero-item show-hero hero row ml-0'
                        } else {
                            customClass = 'hero-item hero row ml-0'
                        }
                        return <HeroItem key={index} data={item} cClass={customClass} />
                    })}
                    <div className='hero__ctrls row'>
                        <button className='m-1 hero__ctrls__left' onClick={moveLeft} disabled={count === 0}>
                            <i className='fa fa-angle-left' aria-hidden='true'></i>
                        </button>
                        <button className='m-1 hero__ctrls__right' onClick={moveRight} disabled={count === 2}>
                            <i className='fa fa-angle-right' aria-hidden='true'></i>
                        </button>
                    </div>
                    <div className="banner py-4">
                        <span>
                            Read more about our response to the Covid-19 pandemic
                            <a className="mx-2" href="#here">here</a>
                        </span>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 col-md-6 about__text">
                                <p className="about__tag">A little about us</p>
                                <h2 className="font-weight-bold">
                                    Providing efficient, effective, and coordinated
                                    humanitarian response to Nigerians.
                                </h2>
                                <p className="lighten my-5">
                                In order to guarantee high-level political authority
                                and coordination for all social protection programmes
                                within Nigeria, the Federal Government of Nigeria has
                                established the National Social Investment Office (NSIO).
                                The social investment programmes draw from the social
                                protection policy framework in a manner that ensures a
                                life of dignity for those who have been constrained,
                                in one way or another, from achieving their full potential.
                                </p>
                                <a href="/apply" className="btn btn--primary px-5 py-3">Read More</a>
                            </div>
                            <div className="col-12 col-md-6 about__image">
                                <img src={aboutImage} alt="About image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="programmes">
                    <div className="container">
                        <h2 className="text-center font-weight-bold">Our Programmes</h2>
                        <p className="text-center lighten mx-auto my-3">
                            Our programmes are specifically designed to empower, train and
                            uplift millions of abandoned Nigerians in every part of the country.
                        </p>
                        <div className="row programs my-5 mx-0">
                            <div className="col-12 col-md-6 program px-0 my-3">
                                <div className="program__image n-power"></div>
                                <div className="p-4">
                                    <h3 className="program__name font-weight-bold">N-POWER</h3>
                                    <p className="lighten mt-3 mb-5">
                                        The N-Power Programme is a job creation and
                                        skills empowerment programme of the Federal
                                        Government of Nigeria. N-Power is designed
                                        to help young Nigerians acquire and develop
                                        life-long skills to become practical solution
                                        providers in their communities, enabling them
                                        to become innovative players in the domestic
                                        and global markets. The N-Power programme is
                                        for young Nigerians between the ages of 18 and 35.
                                    </p>
                                    <a href="/apply" className="btn btn--primary px-5 py-3">Apply Now</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 program px-0 my-3">
                                <div className="program__image trader"></div>
                                <div className="p-4">
                                    <h3 className="program__name font-weight-bold">Trader Moni</h3>
                                    <p className="lighten mt-3 mb-5">
                                        TraderMoni is a loan programme of the Federal
                                        Government, created specifically for petty
                                        traders and artisans across Nigeria. It is a
                                        part of the Government Enterprise and Empowerment
                                        Programme (GEEP) scheme of the Federal Government,
                                        being executed by the Bank of Industry. With TraderMoni,
                                        you can receive interest-free loans starting from
                                        N10,000 and growing all the way to N100,000 as
                                        you pay back. 
                                    </p>
                                    <a href="/apply" className="btn btn--primary px-5 py-3">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners">
                    <div className="container">
                        <h2 className="text-center font-weight-bold">Our Partners</h2>
                        <div className="row my-5">
                            <div className="partner col">
                                <img src="/bank.svg" alt="Bank icon" />
                            </div>
                            <div className="partner col">
                                <img src="/cbn.svg" alt="CBN icon" />
                            </div>
                            <div className="partner col">
                                <img src="/dangote.svg" alt="Dangote icon" />
                            </div>
                            <div className="partner col">
                                <img src="/nassarawa.svg" alt="Nassarawa icon" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news-section">
                    <div className="container">
                        <h2 className="text-center font-weight-bold">Latest News</h2>
                        <p className="text-center lighten mx-auto my-3">
                            Keep up with the latest updates about programmes and events
                        </p>
                        <div className="row news my-5 mx-0">
                            <div className="col-12 col-md-4 item px-0 my-2">
                                <div className="item__image"></div>
                                <div className="p-4 pb-0">
                                    <h3 className="item__name font-weight-bold">
                                        Impacting Lives During A Global Pandemic
                                    </h3>
                                    <p className="item__date">
                                        June 25, 2020
                                    </p>
                                    <p className="lighten my-3">
                                        The N-Power Programme is a job creation
                                        and skills empowerment programme of the
                                        Federal Government of Nigeria…
                                    </p>
                                </div>
                                <div className="item__action">
                                    Read More
                                </div>
                            </div>
                            <div className="col-12 col-md-4 item px-0 my-2">
                                <div className="item__image"></div>
                                <div className="p-4 pb-0">
                                    <h3 className="item__name font-weight-bold">
                                        Impacting Lives During A Global Pandemic
                                    </h3>
                                    <p className="item__date">
                                        June 25, 2020
                                    </p>
                                    <p className="lighten my-3">
                                        The N-Power Programme is a job creation
                                        and skills empowerment programme of the
                                        Federal Government of Nigeria…
                                    </p>
                                </div>
                                <div className="item__action">
                                    Read More
                                </div>
                            </div>
                            <div className="col-12 col-md-4 item px-0 my-2">
                                <div className="item__image"></div>
                                <div className="p-4 pb-0">
                                    <h3 className="item__name font-weight-bold">
                                        Impacting Lives During A Global Pandemic
                                    </h3>
                                    <p className="item__date">
                                        June 25, 2020
                                    </p>
                                    <p className="lighten my-3">
                                        The N-Power Programme is a job creation
                                        and skills empowerment programme of the
                                        Federal Government of Nigeria…
                                    </p>
                                </div>
                                <div className="item__action">
                                    Read More
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="social">
                    <div className="row justify-content-center align-items-center mx-0">
                        <div className="container">
                            <p>Be the first to know</p>
                            <h3>
                                Follow us on our social media platforms for
                                all the latest updates and applications news
                            </h3>
                            <div className="row icons justify-content-between">
                                <div className="icon">
                                    <i className="fa fa-twitter"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-facebook"></i>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="questions">
                    <div className="row justify-content-center align-items-center mx-0">
                        <div className="container">
                            <h3>Got Questions?</h3>
                            <p>
                                For enquiries, complaints or requests,
                                feel free to reach out to us.
                            </p>
                            <a className="btn btn--primary my-3" href="contact-us">Contact Us</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
