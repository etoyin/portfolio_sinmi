import Project_grid from '@/Components/Project_grid'
import Footer from '@/Layouts/Footer'
import NavBar from '@/Layouts/NavBar'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

function Projects(props) {

    const [projects, setProjects] = useState(props.projects);
    console.log(props.projects);
    
  
    return (
    <div>
        <Head >
            <title>Projects</title>
            <meta name="description" content="Projects - Sinmi Akinsanmi's website Portfolio page." />
            <meta name="keywords" content="Sinmi Akinsanmi, project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />
        <div className="relative bg-[url('/img/project.jpg')] bg-top bg-cover bg-fixed bg-no-repeat h-screen">
            <h2 className="absolute  bottom-10 left-10 sm:left-32 text-white text-3xl md:text-6xl font-bold bg-black bg-opacity-50 uppercase">
                Sinmi's projects
            </h2>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"></div>
        </div>
        <div className="p-2 sm:p-10 text-black flex items-center justify-center">
            <div className="flex gap-4 flex-col w-full sm:w-1/2">
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className=''>
                    <img src="/img/black_sinmi_logo2.png" alt="" />
                </p>
            </div>
            <div className="w-full sm:w-1/2 rounded-tl-2xl rounded-br-2xl overflow-hidden">
                <img src="/img/project2.jpg" className='w-full h-full' alt="" />
            </div>
        </div>
        <div className="bg-[#ddf] p-2 sm:p-10">
            <h2 className="font-bold text-3xl text-center">Projects</h2>
            <div className="">
                <Project_grid projects={projects} />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects