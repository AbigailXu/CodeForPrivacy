import React from 'react'
import { Post, Resource } from '@/types/types';
import Image from 'next/image';


type PopupProps = {
  content: Resource | Post | null,
  handleCardClose: Function
}

export default function Popup({ content, handleCardClose }: PopupProps) {
  if (!content) return null;

  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {content && (
                  content.title
                )}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleCardClose()}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="popupContainer relative p-6 flex-auto">
                 {/* <Image src={content.image || 'path/to/default/image.png'}  alt={content.title} className="mb-4"/> */}
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              {typeof content.context === 'string' ? (
                  <div dangerouslySetInnerHTML={createMarkup(content.context)} />
                ) : (
                  <div>{content.context}</div>
              )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
