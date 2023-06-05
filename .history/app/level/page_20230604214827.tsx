import React from 'react'

export default function Level() {
  return (
    <div className='min-h-screen flex'>
        <h1 className='text-4xl font-extrabold'>Select Difficulty Level! </h1>
        <button className='bg-gray-200'>Easy</button>
        <button className='bg-gray-200'>Medium</button>
        <button className='bg-gray-200'>Hard</button>
        <button className='bg-gray-200'>Extra Hard</button>

        <button>Create oyour own puzzles.</button>
    </div>
  )
}
