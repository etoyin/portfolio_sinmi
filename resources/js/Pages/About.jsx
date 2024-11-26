import AutoScrollAchievements from '@/Components/AutoScrollAchievements'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import { Head } from '@inertiajs/react'
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
        <Head >
            <title>About</title>
            <meta name="description" content="About Sinmi Akinsanmi, Blog - Sinmi Akinsanmi's website Portfolio page." />
            <meta name="keywords" content="Sinmi Akinsanmi, About Sinmi Akinsanmi project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />
        <div className="relative bg-[url('/img/about2.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl bg-black bg-opacity-50 font-bold uppercase">About Sinmi</h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
            
        </div>
        <div className="p-2 sm:p-10 bg-[#121d30]">
            <div className="md:flex flex-row-reverse items-center justify-between">
                <div className="rounded-xl w-full md:w-5/12 overflow-hidden">
                    <img src="/img/no-fear.jpg" className='w-full' alt="" />
                </div>
                <div className="text-white flex flex-col justify-center w-full md:w-6/12">
                    <h2 className="text-5xl uppercase font-bold">About Sinmi</h2>
                    <div className="text-lg space-y-3 my-3">
                        <p>
                        Welcome here ... <br/>Our lives are shaped by our daily experiences. The plan is to use this medium to share mine.<br/>

                        <span className='italic'>A brief overview of me, Let us just say I have strong expertise in these: project management, operations management, product strategy and management, business management, business development, agile software development.</span><br/>

                        As an avid and rapid learner, I have been able to excel in multifaceted roles in Fintech, Energy, Telecommunications, Power and Retail.<br/>

                        Do reach out should your need me for anything? 🙂<br/>
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