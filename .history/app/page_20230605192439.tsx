import Link from "next/link";
import Sudoku from "./components/Sudoku";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Sudoku />      
    <Link href="/level" type="button" className="my-20 py-2 px-10 text-2xl font-bold bg-slate-600 rounded hover:bg-blue-600">
    </main>
  )
}
