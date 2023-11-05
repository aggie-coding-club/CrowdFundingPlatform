'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'About', href: '/About' },
    { name: 'Campaigns', href: '/Campaigns' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Login', href: '/Login' },
]

export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return(
        <main data-theme="dark">
            <div className="bg-red-950 navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="bg-red-950 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Logo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/Login" className="btn bg-[#330b0b] btn-ghost">Sign In</a>
                </div>
            </div>

        {/*<div className="bg-white">*/}
		{/*	<header className="absolute inset-x-0 top-0 z-50">*/}
		{/*		<nav className="bg-[#501B1D] flex items-center justify-between p-8 lg:px-12" aria-label="Global">*/}
		{/*			<div className="flex lg:flex-1">*/}
		{/*				<Link href="/" className="-m-1.5 p-1.5">*/}
		{/*					<span className="sr-only">AggieFunds</span>*/}
        {/*                    <p>Logo</p>*/}
		{/*				</Link>*/}
		{/*			</div>*/}
		{/*			<div className="flex lg:hidden">*/}
		{/*				<button*/}
		{/*					type="button"*/}
		{/*					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
		{/*					onClick={() => setMobileMenuOpen(true)}*/}
		{/*				>*/}
		{/*					<span className="sr-only">Open main menu</span>*/}
		{/*					<Bars3Icon className="h-6 w-6" aria-hidden="true" />*/}
		{/*				</button>*/}
		{/*			</div>*/}
		{/*			<div className="hidden lg:flex lg:gap-x-12">*/}
		{/*				{navigation.map((item) => (*/}
		{/*					<Link key={item.name} href={item.href} className="text-lg font-semibold text-white">*/}
		{/*						{item.name}*/}
		{/*					</Link>*/}
		{/*				))}*/}
		{/*			</div>*/}
		{/*		</nav>*/}
        {/*        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>*/}
        {/*            <div className="fixed inset-0 z-50" />*/}
        {/*            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
        {/*                <div className="flex items-center justify-between">*/}
        {/*                    <Link href="/" className="-m-1.5 p-1.5">*/}
        {/*                        <span className="sr-only">AggieFunds</span>*/}
        {/*                        <p>Logo</p>*/}
        {/*                    </Link>*/}
        {/*                    <button*/}
        {/*                        type="button"*/}
        {/*                        className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
        {/*                        onClick={() => setMobileMenuOpen(false)}*/}
        {/*                    >*/}
        {/*                        <span className="sr-only">Close menu</span>*/}
        {/*                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />*/}
        {/*                    </button>*/}
        {/*                </div>*/}
        {/*                <div className="mt-6 flow-root">*/}
        {/*                    <div className="-my-6 divide-y divide-gray-500/10">*/}
        {/*                        <div className="space-y-2 py-6">*/}
        {/*                            {navigation.map((item) => (*/}
        {/*                                <Link*/}
        {/*                                key={item.name}*/}
        {/*                                href={item.href}*/}
        {/*                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
        {/*                                >*/}
        {/*                                {item.name}*/}
        {/*                                </Link>*/}
        {/*                            ))}*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </Dialog.Panel>*/}
        {/*        </Dialog>*/}
		{/*	</header>*/}
        {/*</div>*/}
        </main>
    )
}