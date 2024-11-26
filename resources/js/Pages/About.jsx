import AutoScrollAchievements from '@/Components/AutoScrollAchievements'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import React, { useState } from 'react'

function About() {

    const [slides, setSlides] = useState([
        {
            img: '/img/portrait.jpeg',
            name: "John Doe",
            review: "This is a test review. Sinmi is a very good project manager, he delivers in record time!"
        },
        {
            img: '/img/5856.jpg',
            name: "John Doe",
            review: "This is a test review. Sinmi is a very good project manager, he delivers in record time!"
        },
        {
            img: '/img/2.jpg',
            name: "John Doe",
            review: "This is a test review. Sinmi is a very good project manager, he delivers in record time!"
        },
        {
            img: '/img/5856.jpg',
            name: "John Doe",
            review: "This is a test review. Sinmi is a very good project manager, he delivers in record time!"
        },
        {
            img: '/img/2.jpg',
            name: "John Doe",
            review: "This is a test review. Sinmi is a very good project manager, he delivers in record time!"
        }
    ])

    return (
    <div>
        <NavBar />
        <div className="relative bg-[url('/img/about2.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl bg-black bg-opacity-50 font-bold uppercase">About Sinmi</h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
            
        </div>
        <div className="p-2 sm:p-10 bg-[#121d30]">
            <div className="md:flex flex-row-reverse items-center justify-between">
                <div className="rounded-xl w-full md:w-5/12 overflow-hidden">
                    <img src="/img/about3.jpg" className='w-full' alt="" />
                </div>
                <div className="text-white flex flex-col justify-center w-full md:w-6/12">
                    <h2 className="text-5xl uppercase font-bold">About Sinmi</h2>
                    <div className="text-lg space-y-3 my-3">
                        <p>
                            I embrace opportunities - as I approach life with faith, confidence and optimism.  I enjoy weighing ideas, analysing systems and businesses to produce the best of decisions.
                        </p>

                        <p>
                            Most people go through life worried about the future. My aim is to use this pages to inspire, encourage and spread hope.
                        </p>

                        <p>
                            I write about careers, leadership, life, books I read and products. I also speak publicly about these topics. The goal is not to just to motivate but hopefully I can inspire you to face life head on.
                        </p>

                        <p>
                            You can follow me on twitter, where I also share my thoughts about life, tech, politics, economy and relationships.
                        </p>

                        <p>
                            I am a full-time dad to two wonderful kids and I am married to Damilola.
                        </p>
                    </div>
                    <div className="font-semibold text-lg my-3">
                        <p className="italic">
                            Execution is the name of the game, No challenge is insurmountable!!!! I'm very positive about life,  tech, innovation and great products.
                        </p>
                        <p>
                            - Sinmi Akinsanmi
                        </p>
                    </div>
                    <div className="font-semibold">
                        <i className="font-bold las la-map-marker"></i> Lagos, Africa.
                    </div>
                </div>
            </div>
            <div className="h-px my-10 bg-white"></div>
            <div className="flex text-white justify-around flex-wrap">
                <div className="exp font-bold text-center">
                    <h2 className="text-5xl ">15+</h2>
                    <p>Years of experience</p>
                </div>
                <div className="pro font-bold text-center">
                    <h2 className="text-5xl">34+</h2>
                    <p className=''>Projects Completed</p>
                </div>
                <div className="soc font-bold text-center">
                    <h2 className="text-5xl font-bold">1M+</h2>
                    <p>Followers</p>
                </div>
            </div>
        </div>
        <div className="text-[#121d30]">
            <div className="p-2 sm:p-10">
                <h2 className="text-3xl font-bold text-center uppercase">Achievements</h2>
            </div>

            <AutoScrollAchievements slides={slides} />
        </div>
        <Footer />
    </div>
  )
}

export default About;