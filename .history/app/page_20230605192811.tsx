import Link from "next/link";
import Sudoku from "./components/Sudoku";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Sudoku />
    <Link href="/level" className="bg-green-300 py-2 px-3">Level</Link>      
    
    </main>
  )
}
