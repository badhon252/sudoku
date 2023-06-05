import React from 'react'

export default function Level() {
  return (
    <div className='min-h-screen flex'>
        <h1 className='text-4xl font-extrabold'>Select Difficulty Level! </h1>
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
        <button>Extra Hard</button>

        <button>Create oyour own puzzles.</button>
    </div>
  )
}
