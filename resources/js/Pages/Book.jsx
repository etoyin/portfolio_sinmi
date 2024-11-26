import InputError from '@/Components/InputError'
import TextInput from '@/Components/TextInput'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import { Textarea } from '@headlessui/react'
import { Head } from '@inertiajs/react'
import React from 'react'

function Book() {
  return (
    <div>
        <Head >
            <title>Bookings</title>
            <meta name="description" content="Bookings, Blog - Sinmi Akinsanmi's website Portfolio page." />
            <meta name="keywords" content="Sinmi Akinsanmi, Home Page project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />
        <div className="relative bg-[url('/img/book.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl bg-black bg-opacity-50 font-bold uppercase">Book Sinmi</h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
        </div>

        <div className="bg-white flex flex-col justify-center items-center p-5 sm:p-10 md:p-16">
            
            <div className="w-full sm:w-5/6 ">
                <div className="bg-[#121d30] w-full sm:w-5/6 p-5 m-auto rounded-lg">
                    <p className="capitalize font-bold text-white text-3xl">Send us a booking</p>
                    <form action="#">
                        <div className="my-3">

                            <div className="sm:flex">
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="first_name"
                                        type="text"
                                        name="first_name"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="First Name"
                                        isFocused={true}
                                        placeholder="Enter your First Name"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="last_name"
                                        type="text"
                                        name="last_name"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="Last Name"
                                        isFocused={true}
                                        placeholder="Enter your Last Name"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>

                            <div className="sm:flex">
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="email"
                                        type="text"
                                        name="email"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="email"
                                        isFocused={true}
                                        placeholder="Enter your email"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="phone"
                                        isFocused={true}
                                        placeholder="Enter your phone number"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>

                            <div className="sm:flex">
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="company"
                                        type="text"
                                        name="company"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="company"
                                        isFocused={true}
                                        placeholder="Enter your company"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className='w-full m-2'>
                                    <TextInput
                                        id="country"
                                        type="text"
                                        name="country"
                                        // value={{}}
                                        className="mt-2 block w-full "
                                        autoComplete="country"
                                        isFocused={true}
                                        placeholder="Enter your country"
                                        // onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>

                            <p className="font-bold mt-5 text-white">What do you want us to do?</p>
                            <div className='m-2 flex items-center text-white'>
                                
                                <TextInput
                                    id=""
                                    type="radio"
                                    name="purpose"
                                    value='Project Management'
                                    className=" block "
                                    autoComplete="username"
                                    isFocused={true}
                                    placeholder="Enter a valid email"
                                    // onChange={(e) => setData('email', e.target.value)}
                                /> 
                                <p className='ml-10 font-semibold'>Project Management</p>
                            </div>

                            <div className='m-2 flex items-center text-white'>
                                
                                <TextInput
                                    id=""
                                    type="radio"
                                    name="purpose"
                                    value='Software Development'
                                    className=" block "
                                    autoComplete=""
                                    isFocused={true}
                                    // onChange={(e) => setData('email', e.target.value)}
                                /> 
                                <p className='ml-10 font-semibold'>Software Development</p>
                            </div>

                            <div className='m-2 flex items-center text-white'>
                                
                                <TextInput
                                    id=""
                                    type="radio"
                                    name="purpose"
                                    value='Business Development'
                                    className=" block "
                                    autoComplete=""
                                    isFocused={true}
                                    // onChange={(e) => setData('email', e.target.value)}
                                /> 
                                <p className='ml-10 font-semibold'>Business Development</p>
                            </div>

                            <div className='m-2 flex items-center text-white'>
                                
                                <TextInput
                                    id=""
                                    type="radio"
                                    name="purpose"
                                    value='Business Management'
                                    className=" block "
                                    autoComplete=""
                                    isFocused={true}
                                    // onChange={(e) => setData('email', e.target.value)}
                                /> 
                                <p className='ml-10 font-semibold'>Business Management</p>
                            </div>

                            <div>
                                <Textarea
                                    id="feedback"
                                    name="feedback"
                                    // value={{}}
                                    className="rounded mt-5 b block w-full "
                                    rows={8}
                                    isFocused={true}
                                    placeholder="Your message"
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

export default Book