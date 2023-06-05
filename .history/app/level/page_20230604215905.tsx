import React from 'react'

export default function Level() {
  return (
    <div className='min-h-screen flex flex-col items-center  justify-between bg-slate-800 text-white'>
        <h1 className='text-5xl font-extrabold my-10'>Select Difficulty Level! </h1>

        <div className="btns  flex flex-col">
        <button type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Easy</button>
        <button type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Medium</button>
        <button type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Hard</button>
        <button type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Extra Hard</button>
        </div>

        <button type='button' className='my-20 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Create your own puzzles.</button>
    </div>
  )
}
