import { Link } from '@inertiajs/react'
import React from 'react'

function Project_grid({projects}) {
    const trunc = (str) => {
        if(str.length > 100){
            return str.substring(0,100) + "...";
        }
        return str.substring(0,100);
    }
  return (
    <div className='w-full mx-auto flex flex-wrap justify-center sm:w-10/12'>
        {
            projects.map((x, i) => {
                return(
                    <div key={i} className="relative group w-full sm:w-64 m-10 shadow rounded-lg">
                        <img src={x.featured_image} alt=""/>
                        <div className="hidden group-hover:block absolute text-sm flex flex-col justify-center p-2 text-white bg-black bg-opacity-50 left-0 top-0 w-full h-full">
                            <h2 className="font-semibold text-base uppercase">{i+1 + ". " + x.title}</h2>
                            <p className="">{trunc(x.description)}</p>
                            <Link href="#"><p className="font-semibold">Read More</p></Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Project_grid