import Link from "next/link"


export default function Level() {
  return (
    <div className='min-h-screen flex flex-col items-center  justify-between bg-slate-800 text-white'>
        <h1 className='text-5xl font-extrabold my-10'>Select Difficulty Level! </h1>

        <div className="btns  flex flex-col">
        <Link href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600'>Easy</Link>
        <Link href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600'>Medium</Link>
        <Link href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600'>Hard</Link>
        <Link href="/" type='button' className='my-2 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600'>Extra Hard</Link>
        </div>

        <Link href="/" type='button' className='my-20 py-2 px-10 text-2xl font-bold bg-slate-600 rounded'>Create your own puzzles.</Link>
    </div>
  )
}
