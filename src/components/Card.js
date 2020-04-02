import React from 'react'
import './card.css'

const Card = ({ props }) => {
  const { days, description, imgUrl, lead, tags, time, title } = props
  // debugger
  return (
    <div className="paper">
      {/* <div
        className="w-full h-64 bg-cover"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      /> */}
      <img className="w-full min-h-1/4" src={imgUrl} alt="header image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-grey-darker text-base mb-4">{lead}</p>
        <p class="text-gray-700 text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        {tags.map(tag => (
          <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
