import { Link } from '@inertiajs/react'
import React from 'react'

function Thoughts_grid({thoughts}) {
    const trunc = (str) => {
        if(str.length > 100){
            return str.substring(0,100) + "...";
        }
        return str.substring(0,100);
    }
  return (
    <div className='w-full mx-auto flex flex-wrap justify-center sm:w-10/12'>
        {
            thoughts.map((x, i) => {
                return(
                    <div key={i} className="group w-full sm:w-72 m-10 shadow rounded-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img src={'/storage/'+x.img_location} alt=""/>
                        </div>
                        <div className=" text-sm flex flex-col justify-center text-center text-white p-2 bg-black bg-opacity-50">
                            <Link href="#"><div className=" py-1 my-2 px-2 rounded-full text-center capitalize bg-blue-400">{x.categories}</div></Link>
                            <h2 className="font-semibold text-base text-center uppercase">{x.title}</h2>
                            <p className="">
                                <span dangerouslySetInnerHTML={{ __html: x.content.substring(0, 100) }}/>
                            </p>
                            <Link href="#"><p className="font-semibold">Read More</p></Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Thoughts_grid