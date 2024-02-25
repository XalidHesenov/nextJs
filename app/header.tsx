import Link from "next/link";
export default function Header() {
    return (
        <nav className="bg-blue-900 flex items-center justify-between">
            <div className="float-left ml-3 text-2xl items-center flex font-semibold text-gray-900 dark:text-white">
                <img className="w-10  h-10 mr-2" src="/gerb.png" alt="" />
                <p className=" font-sans">AZƏRBAYCAN RESPUBLİKASI MALİYYƏ NAZİRLİYİ</p>
            </div>
            <ul className="p-4 font-medium ml-auto border-x-cyan-50 flex flex-row">
                <li>
                    <Link href="/" className="mx-2 text-white hover:text-blue-700" aria-current="page">Ana səhifə</Link>
                </li>
                <li>
                    <Link href="/about" className="mx-2 text-white hover:text-blue-700">Haqqımzda</Link>
                </li>
                <li>
                    <Link href="/request" className="mx-2 text-white hover:text-blue-700">Müraciət</Link>
                </li>
            </ul>
        </nav >
    )
}