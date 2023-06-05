import { Link } from 'react-router-dom'
export default function Level() {
  return (
    <div className='min-h-screen flex flex-col items-center  justify-between bg-slate-800 text-white'>
        <h1 className='text-5xl font-extrabold my-10'>Select Difficulty Level! </h1>

        <div className="btns  flex flex-col">
        <Link type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-slate-900'>Easy</Link>
        <Link type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-slate-900'>Medium</Link>
        <Link type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-slate-900'>Hard</Link>
        <Link type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-slate-900'>Extra Hard</Link>
        </div>

        <Link type='button' className='my-20 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Create your own puzzles.</Link>
    </div>
  )
}
