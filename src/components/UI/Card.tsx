import Image from 'next/image';
import {MdDownloadForOffline } from 'react-icons/md';

// import { useDispatch } from "react-redux";
import React, {useEffect, useState} from "react";
import { Post, Resource } from '@/types/types';
// import { type Entry } from '@/types/types';

type CardProps = Resource | Post;

export default function Card({
  title,
  description,
  image,
  date,
}: CardProps) {

  // const dispatch = useDispatch();

  return (
    <div 
      
      className="w-[300px] overflow-hidden rounded-2xl border border-grey1 md:w-[300px] m-1">
        <div className="h-[150px] overflow-hidden fill">
          <Image
            src={image || 'path/to/default/image.png'} 
            alt={title}
            className="object-cover w-full h-full"
            layout="responsive"
            width={300}
            height={150}  
          />
        </div>
      <div className="relative whitespace-normal">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative px-6 pb-8 pt-5" >
          <h4
            className={`text-2xl font-bold md:text-3xl ${
              description ? 'mb-2' : ''
            }`}
          >
            {title}
          </h4>
          {date && (
            <div className="mb-2 flex items-center gap-3">
              <p className="text-sm opacity-50 md:text-md">Updated {date}</p>
            </div>
          )}
          {description && (
            <div className="flex items-center gap-3">
              <p className="text-sm text-grey2 md:text-md">{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
