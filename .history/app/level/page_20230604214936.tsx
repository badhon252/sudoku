import React from 'react'

export default function Level() {
  return (
    <div className='min-h-screen flex flex-row'>
        <h1 className='text-4xl font-extrabold'>Select Difficulty Level! </h1>
        <button className='bg-gray-200 text-2xl font-bold'>Easy</button>
        <button className='bg-gray-200 text-2xl font-bold'>Medium</button>
        <button className='bg-gray-200 text-2xl font-bold'>Hard</button>
        <button className='bg-gray-200 text-2xl font-bold'>Extra Hard</button>

        <button className='bg-gray-200 text-2xl font-bold'>Create oyour own puzzles.</button>
    </div>
  )
}
