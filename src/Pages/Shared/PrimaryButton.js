import React, { Children } from 'react'

export default function PrimaryButton({children}) {
  return (
    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r secondary to-primary">{children}</button>

  )
}
