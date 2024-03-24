import React from 'react'
import Card from '@/components/UI/Card'
import { Post, Resource } from '@/types/types'

type CardListProps = {
  heading: String
  cardEntries: (Post | Resource)[];
}

export default function CardList({ heading, cardEntries }: CardListProps) {


  return (
    <>
      {/* Card list */}
      <section className="mx-container mb-section mt-10 lg:mt-18">
        <h2 className="text-xl font-semibold mb-5">{heading}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cardEntries &&
            cardEntries.map((entry, index) => (
              <Card
                key={index}
                {...entry}
              />
            ))}
        </div>
      </section>
    </>
  )
}
