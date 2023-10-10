import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return(
        <div className="navbar bg-[#931010] text-white">
            <div className="navbar-start bg-[#931010] flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
                <div className="flex items-center space-x-2">
                    <Link href={"/"}>
                        Insert Logo
                    </Link>
                </div>
            </div>

            <div className="navbar-end px-8 space-x-6">
                <Link className="px-4 py-2" href="/About">About</Link>
                <Link className="px-4 py-2" href="/Campaigns">Campaigns</Link>
                <Link className="px-4 py-2" href="/Contact">Contact</Link>
                <Link className="px-4 py-2" href="/Login">Login</Link>
            </div>
        </div>
    )
}