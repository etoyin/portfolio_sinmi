import Thoughts_grid from '@/Components/Thoughts_grid'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

function Thoughts() {
  const [thoughts, setThoughts] = useState([
      {
          title: 'WORKSURVAYFORM',
          body: 'Workplace Satisfaction Survey This project contains the source code for a simple yet elegant workplace satisfaction survey form. The form collects feedback from employees about their workplace experiences and suggestions for improvements.!',
          featured_image: 'img/feat_img.jpeg',
          category: "news"         
      },

      {
          title: 'Tic tac toe',
          body: 'Robot Pointing on a Wall Circle with gradienTic-Tac-Toe Web application USING HTML/CSS/JS',
          featured_image: 'img/feat_img.jpeg',
          category: "sports"
      },

      {
          title: 'Unit calculator',
          body: 'A versatile Unit Calculator that converts between Imperial and Metric units for length, weight, and volume. Features easy-to-use input fields, real-time conversion, and a dark mode toggle for a user-friendly experience.',
          featured_image: 'img/feat_img.jpeg',
          category: "tech"
      },

      {
          title: 'Silver Oak University Website',
          body: 'A responsive and modern website for Silver Oak University, featuring sections for About Us, Courses, Contact, and Events. The site includes a video background, dynamic animations, and a user-friendly navigation bar.',
          featured_image: 'img/feat_img.jpeg',
          category: "tech"
      },

  ])
  return (
    <div>
        <Head >
            <title>Thoughts</title>
            <meta name="description" content="Thoughts, Blog - Sinmi Akinsanmi's website Portfolio page." />
            <meta name="keywords" content="Sinmi Akinsanmi, Blog project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />
        <div className="relative bg-[url('/img/thoughts.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl font-bold bg-black bg-opacity-50 uppercase">
                Sinmi's Thoughts
            </h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
        </div>
        <div className="">
          <div className="p-5 sm:p-10">
            <h2 className="text-2xl font-bold text-center">Thoughts</h2>
            <p className="text-base text-center">
              <span className='italic'>“The strength of an Army will change, Just like water will change its
              form. But he who can prevail in chaos, is regarded as a god ” </span>– God of War
            </p>
          </div>
        </div>
        <div className="">
          <Thoughts_grid  thoughts={thoughts}/>
        </div>
        <Footer />
    </div>
  )
}

export default Thoughts