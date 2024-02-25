import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Haqqımızda',
    description: 'Maliye nazirliyi haqqinda',
  };
export default function About() {
    return (
        <div className="mt-3 text-slate-900 w-[600px] bg-white">
            <p className="text-2xl p-3 font-bold">Haqqımızda</p>
            <div className="px-3">
                <button className="border text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Tarix</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Nazirlik haqqında</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Əsasnamə</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Rəhbərlik</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Struktur</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Kollegiya</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Yerli maliyyə orqanları</button>
                <button className="border mt-2 text-btnClr transition hover:bg-blue-100 hover:border-blue-400 hover:text-red-600 bg-gray-100 border-gray-300 w-full text-left h-12 px-6">Tabeçilikdə olan müəssisələr</button>
            </div>
        </div>
    )
}