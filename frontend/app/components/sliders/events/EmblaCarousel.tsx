
import React, { useEffect, useState } from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Link } from "react-router";
import { FaTheaterMasks } from 'react-icons/fa'
import type { Event } from 'types/Event';

type PropType = {
  events: Event[];
  slides: number[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options);


  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-5 w-full pl-8">
          {
            props.events.map((event) => (

              <div key={event._id} className="max-h-50 h-50 items-start justify-start min-w-45 flex flex-col relative cursor-pointer rounded-2xl overflow-hidden">
                <img
                  src={`/images/events/${event.thumbnail}`}
                  key={event.thumbnail}
                  className=" w-full h-full object-cover"
                  alt=""
                />
                <div className="z-900 opacity-0 w-full h-full bg-[#000000a6] items-center justify-center hover:opacity-100 flex flex-col space-y-3 absolute top-0 left-0 right-0">
                  <p className="text-white">{event.name}</p>
                  <button className='flex px-2 py-3 items-center bg-red-500 rounded-2xl space-x-2'>
                    <Link to={`/events/${event._id}`} className="text-white">View more</Link>
                  </button>
                </div>
              </div>
            ))
          }
          <Link to={'/events'} className="bg-[#333] w-full min-w-40 mx-4 rounded-lg overflow-hidden">
            <div className="relative flex items-center justify-center h-40">
              {/* Thumbnail Image */}
              <FaTheaterMasks fontWeight={20} size={60} color="white" />
            </div>
            <div className="p-2">
              <h3 className="text-sm text-center text-white font-medium">
                View All Events
              </h3>
            </div>
          </Link>
        </div>
      </div>

    </section>
  )
}

export default EmblaCarousel
