import AutoScroll from '@/Components/AutoScroll';
import NavBar from '@/Layouts/NavBar';
import Footer from '@/Layouts/Footer';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { ReactTyped } from "react-typed";

function HomePage() {
    const [slides, setSlides] = useState([
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
            <div className="relative bg-[url('/img/road.jpg')] bg-center bg-cover bg-fixed bg-no-repeat h-screen">    
                <div className="z-5 flex flex-col items-center justify-center absolute left-0 top-0 bg-[#575c25] bg-opacity-60 w-full h-full">
                    
                    <h2 className="text-white uppercase font-bold text-5xl mt-60 mb-20 text-center">
                        <ReactTyped
                            strings={[
                                'Expert in project management',
                                'Expert in operations management', 'Expert in product strategy and management', 
                                'Expert in business management', 'Expert in business development', 
                                'Expert in agile software development'
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />

                    </h2>
                    <h3 className="p-2 text-white text-xl md:text-2xl w-full md:w-[700px] text-center">
                        As an avid and rapid learner, Sinmi has been able to excel in multifaceted roles in Fintech, Energy, Telecommunications, Power and Retail.
                    </h3>

                    <div className="flex justify-between uppercase font-bold p-5 w-full sm:w-[500px]">
                        <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white cursor-pointer">
                            Book Sinmi
                        </div>

                        <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white cursor-pointer">
                            Join the journey
                        </div>
                    </div>

                    
                </div>
            </div>
            <div className="p-10 flex h-64 flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold text-center capitalize w-full md:w-[500px]">
                    Welcome to the Official Site of Sinmi Akinsanmi
                </h2>
                <p className="my-5">Know more about Sinmi Akinsanmi</p>
            </div>
            <div className="bg-[#121d30] md:flex md:flex-row-reverse">
                <div className="w-full flex justify-center items-center md:w-5/12 p-2 sm:p-0">
                    <img src="/img/portrait.jpeg" className='' alt="" srcset="" />
                </div>
                
                <div className="text-white flex flex-col justify-center w-full md:w-7/12 p-2 sm:p-10 ">
                    <h2 className="text-5xl uppercase font-bold">Meet Sinmi</h2>
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

            <div className="py-32 h-98">
                <div className="sm:flex ">
                    <div className="w-full">
                        <div className="w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold">
                            About
                        </div>
                        <Link className='w-full' to="#">
                            <div className="relative w-full group">
                                <img src="/img/about.jpg" alt="" />
                                <div className="transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50">
                                    Find out more about Sinmi
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full">
                        <div className="w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold">
                            Thoughts
                        </div>
                        <Link className='w-full' to="#">
                            <div className="relative w-full group">
                                <img src="/img/thoughts.jpg" alt="" />
                                <div className="transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50">
                                    Sinmi's thoughts
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold">
                            Projects
                        </div>
                        <Link className='w-full' to="#">
                            <div className="relative w-full group">
                                <img src="/img/project.jpg" alt="" />
                                <div className="transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50">
                                    Sinmi's Projects
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold">
                            Contact
                        </div>
                        <Link className='w-full' to="#">
                            <div className="relative w-full group">
                                <img src="/img/contact.jpg" alt="" />
                                <div className="transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50">
                                    Contact Sinmi
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-[#121d30] p-2 text-center uppercase text-white font-bold">
                            Booking
                        </div>
                        <Link className='w-full' to="#">
                            <div className="relative w-full group">
                                <img src="/img/book.jpg" alt="" />
                                <div className="transition-all ease-out duration-700 h-10 opacity-0 group-hover:opacity-100 flex  absolute capitalize text-lg justify-center items-center text-white left-0 top-0 w-full h-full bg-black bg-opacity-50">
                                    Book Sinmi
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>

            <div className="bg-[#121d30] py-10 p-5 m-auto">
                <AutoScroll slides={slides} />
            </div>
            <Footer/>
        </div>
        
    )
}

export default HomePage