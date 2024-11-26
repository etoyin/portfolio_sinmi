import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import { Textarea } from '@headlessui/react'
import { Head } from '@inertiajs/react'
import React from 'react'

function Contact() {
  return (
    <div>
        <Head >
            <title>Contact</title>
            <meta name="description" content="Contact, Blog - Sinmi Akinsanmi's website Portfolio page." />
            <meta name="keywords" content="Sinmi Akinsanmi, Home Page project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />
        <div className="relative bg-[url('/img/contact.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl bg-black bg-opacity-50 font-bold uppercase">Contact Sinmi</h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
            
        </div>
        <div className="bg-white text-[#121d30] flex flex-col gap-4 p-3 sm:p-10 text-center">
            <h2 className="uppercase text-4xl font-bold">Contact Sinmi</h2>
            <p className="text-base">Let's do business together.</p>
        </div>
        <div className="bg-[#121d30] bg-opacity-40 flex flex-wrap p-5 sm:p-10 md:p-16">
            <div className="w-full sm:w-1/2 flex flex-col gap-6">
                <h3 className="text-2xl font-bold uppercase">Our contact info</h3>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold uppercase">Phone:</h3>
                    <p className="">+23468949848</p>
                    <p className="">+23468949848</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold uppercase">Email:</h3>
                    <p className="">info@sinmiakinsanmi.com</p>
                    <p className="">bookings@sinmiakinsanmi.com</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold uppercase">Address:</h3>
                    <p className="">No. 56, House 5, Lolola Avenue, Gbola Estate, Lagos State</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold uppercase">Postal Address:</h3>
                    <p className="">P.O. Box, 112432, Lolola Avenue, Gbola Estate, Lagos State</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold uppercase">Social Handle:</h3>
                    <nav className="uppercase" >
                        <div className="py-1 sm:py-3 ">
                            <div className="flex items-center">
                                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-2xl">
                                    <li>
                                        <a href="#" className="hover:underline" aria-current="page">
                                            <i className="lab la-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            <i className="lab la-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            <i className="lab la-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            <i className="lab la-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            <i className="lab la-telegram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="bg-[#121d30] w-full sm:w-5/6 p-5 m-auto rounded-lg">
                    <p className="capitalize font-bold text-white text-3xl">Leave us your feedback</p>
                    <form action="#">
                        <div className="my-5">
                            <div>
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    // value={{}}
                                    className="mt-2 block w-full font-semibold"
                                    autoComplete="name"
                                    isFocused={true}
                                    placeholder="Enter your full name"
                                    // onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message="" className="mt-2" />
                            </div>

                            <div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    // value={{}}
                                    className="mt-5 block w-full font-semibold"
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="Enter a valid email"
                                    // onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message="" className="mt-2" />
                            </div>
                            <div>
                                <Textarea
                                    id="how"
                                    name="how"
                                    // value={{}}
                                    className="rounded mt-5 b block w-full font-semibold"
                                    isFocused={true}
                                    rows={8}
                                    placeholder="How did you find us"
                                    // onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message="" className="mt-2" />
                            </div>
                            <div>
                                <Textarea
                                    id="feedback"
                                    name="feedback"
                                    // value={{}}
                                    className="rounded mt-5 b block w-full font-semibold"
                                    rows={8}
                                    isFocused={true}
                                    placeholder="Your feedback"
                                    // onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message="" className="mt-2" />
                            </div>

                            <div className="mt-5 text-center font-bold px-4 uppercase py-2 rounded bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white cursor-pointer">
                                Submit
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact