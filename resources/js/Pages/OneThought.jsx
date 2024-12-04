import NavBar from '@/Layouts/NavBar';
import { Head } from '@inertiajs/react';
import React from 'react'

function OneThought(props) {
  console.log(props.one_thought);

  const convertDate = (isoString) => {
    const date = new Date(isoString);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  return (
    <div>
        <Head >
            <title>{props.one_thought[0].title}</title>
            <meta name="description" content={`Projects ${props.one_thought[0].title} - Sinmi Akinsanmi's website Portfolio page.`} />
            <meta name="keywords" content="Sinmi Akinsanmi, project management, operations management, product strategy and management, business management, business development, agile software development." />
        </Head>
        <NavBar />

        <div className="mt-36 sm:mt-56 p-5 sm:p-10">
            <p className='font-semibold uppercase text-sm sm:text-base'>By Sinmi Akinsanmi - <span className='text-blue-600'>{convertDate(props.one_thought[0].created_at)}</span></p>
            <h1 className="uppercase my-5 text-xl sm:text-4xl font-semibold">{props.one_thought[0].title}</h1>
            <div className="my-5 overflow-hidden rounded">
                <img src={'/storage/'+props.one_thought[0].img_location} className='' alt="" srcset="" />
            </div>

            <p className="text-base bg-blue-300 w-fit p-1 rounded shadow text-white my-2">{props.one_thought[0].categories}</p>

            <div className="" dangerouslySetInnerHTML={{ __html: props.one_thought[0].content }}/>
        </div>
    </div>
  )
}

export default OneThought