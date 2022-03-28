import React from 'react'

export const Button = ({text, size, color}) => {
  return (
    <button 
        style={{
            padding: size === 'large' ? '1rem' : '0.5em', 
            color: 'white',
            background: color
        }}
    >
        {text}
    </button>
  )
}

export const PlainButton = (props) => {
    return (
      <Button {...props} color='white' />
    )
  }

export const DangerButton = (props) => {
    return (
      <Button {...props} color='red' />
    )
  }