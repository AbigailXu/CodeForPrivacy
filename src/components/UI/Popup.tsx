import React, {useState} from 'react'
import { Post, Resource } from '@/types/types';
import Image from 'next/image';


type PopupProps = {
  content: Resource | Post | null,
  handleCardClose: Function
}

function hasLink(obj: any): obj is { link: string } {
  return 'link' in obj;
}

export default function Popup({ content, handleCardClose }: PopupProps) {
  if (!content) return null;

  const [currentResponse, setCurrentResponse] = useState("");
  const [currentSelection, setCurrentSelection] = useState("");


  const handleSubmit = (answer: string) => {
    if (currentSelection === answer) {
      setCurrentResponse("Correct!")
    } else if (currentSelection === "") {
      setCurrentResponse("")
    } else {
      setCurrentResponse("Incorrect!")
    }
  
  }

  const handleSelect = (selection: string) => {
    setCurrentSelection(selection)
  }


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          
          {/*content*/}
          <div className="popupContainer border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
              {content && (
                hasLink(content) ? (
                  <a href={content.link}>{content.title}</a>
                ) : (
                  <>{content.title}</> // Just display the title without a link
                )
              )}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => handleCardClose()}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>

            {/*body*/}
            <div className=" relative p-6 flex-auto overflow-y-auto">

              {/*image*/}
              <Image src={content.image || 'path/to/default/image.png'}  style={{ width: '40vw', objectFit: 'scale-down' }} alt={content.title} className="mb-4"/>

              {/*paragraphs*/}
              <div className="my-4 relative text-blueGray-500 text-lg leading-relaxed">
                <div dangerouslySetInnerHTML={content.context && { __html: content.context && content.context.join('') }} />
              </div>

              {/*quiz*/}
              {'question' in content &&
              <div className="my-4 relative text-lg leading-relaxed">
                <div className="mt-4 text-2xl">
                  <div className="mt-10 text-xl opacity-50 pb-2">Check Your Understanding</div>
                  <div className="flex flex-col items-start w-full">
                    {content.question}
                    </div>
                    {content.options.map((entry,index) => (
                      <div
                        key="1"
                        className="flex items-center w-full py-4 pl-5 m-2 ml-0 border-2 cursor-pointer rounded-xl"
                        onClick={(e) => handleSelect(entry)}
                      >
                        <input
                          type="radio"
                          name="a"
                          value="a"
                          onChange={(e) => handleSelect(entry)}
                          checked={currentSelection === entry} 
                          className="w-6 h-6"
                        />
                        <p className="ml-6 ">{entry}</p>
                      </div>
                    ))}
                  <div className="flex justify-between w-full mt-4 text-white">
                    <button 
                      className="w-[20%] py-3 bg-indigo-600 rounded-lg m-auto"
                      onClick={(e) => handleSubmit(content.answer)}
                    >
                      Submit
                    </button>
                  </div>
                  <div className={"flex flex-col items-start w-full " + (currentResponse==="Correct!" ? "text-green-700" : "text-red-700")}>
                    {currentResponse}
                  </div>
                </div>
              </div>
              }
              {/*Reference and authors*/}
              <div className="mt-10 text-l opacity-50 pb-2">
                <div>{content.authors}</div>
                <div><a href={content.reference}>{content.reference}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
