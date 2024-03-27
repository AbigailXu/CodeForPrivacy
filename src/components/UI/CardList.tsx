import React from 'react'
import Card from '@/components/UI/Card'
import { Post, Resource } from '@/types/types'
import Popup from './Popup';

type CardProps = Resource | Post;

type CardListProps = {
  heading: String
  cardEntries: (Post | Resource)[];
}

export default function CardList({ heading, cardEntries }: CardListProps) {

  const [showModal, setShowModal] = React.useState(false);
  const [selectedEntry, setSelectedEntry] = React.useState<CardProps | null>(null);

  // handle card clicks
  const handleCardClick = (entry: CardProps) => {
    // Here you can open a modal or a new page. For simplicity, we use alert
    setShowModal(true)
    setSelectedEntry(entry)
  };

  // handle card close
  const handleCardClose = () => {
    console.log(1)
    setShowModal(false)
  }

  return (
    <>
      {/* Card list */}
      <section className="mx-container mb-section mt-10 lg:mt-18">
        <h2 className="text-xl font-semibold mb-5">{heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardEntries &&
            cardEntries.map((entry, index) => (
              <div className="cursor-pointer" key={index} onClick={() => handleCardClick(entry)}>
                <Card
                  key={index}
                  {...entry}
                />
              </div>
            ))}
        </div>
      </section>

      {/* Popup window */}
      {showModal ? (
        <Popup
          content = {selectedEntry}
          handleCardClose = {handleCardClose}
        />
      ) : null}
    </>
  )
}
