import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoScroll({slides}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="w-10/12 m-auto">
      <h3 className="text-white text-center text-3xl font-bold">Reviews from Clients</h3>

      <div className="mt-20">
      <Slider {...settings}>
      {
        slides.map((x) => {
            return(
                <div className="text-[#121d30] mr-5 bg-white rounded-lg">
                    <div className="flex h-32 items-center justify-center">
                      <div className='rounded-full w-24 h-24 overflow-hidden'>
                        <img src={x.img} alt="" />
                      </div>
                    </div>
                    <div className="p-5 text-center items-center justify-center gap-4 flex flex-col">
                      <p className='font-bold'>{x.name}</p>
                      <p className='text-sm'>{x.review}</p>
                    </div>
                </div>
            )
        })
      }


      </Slider>
      </div>
    </div>
  );
}

export default AutoScroll;