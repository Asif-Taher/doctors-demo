import React from 'react'

export default function Service({service}) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={service.img}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{service.name}</h2>
    <p>{service.descripttion}</p>
  </div>
</div>
  )
}
