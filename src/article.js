import React from 'react'

export default function Article (props) {
  return (
    <div>
      {props.articles
        .filter(el => el.id === props.match.params.id)
        .map(el => (
          <div>
            <h2> {el.title}</h2>
            <h4>{el.date}</h4>
            <p>{el.smallDescription}</p>
          </div>
        ))}
    </div>
  )
}
