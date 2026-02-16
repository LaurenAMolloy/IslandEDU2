import React from 'react'

export default function Button({ children, onClick, type = "button"}) {
  return (
    <button className="primary-btn" onClick={onClick} type={type}>
        {children}
    </button>
  )
}
