import React from 'react'

export default function Level() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-slate-800 text-white'>
        <h1 className='text-4xl font-extrabold my-10'>Select Difficulty Level! </h1>
        <button className='my-5 py-3 px-2 text-2xl font-bold'>Easy</button>
        <button className='my-5 py-3 px-2 text-2xl font-bold'>Medium</button>
        <button className='my-5 py-3 px-2 text-2xl font-bold'>Hard</button>
        <button className='my-5 py-3 px-2 text-2xl font-bold'>Extra Hard</button>

        <button className='my-5 py-3 px-2 text-2xl font-bold'>Create your own puzzles.</button>
    </div>
  )
}
