/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';

import { Instagram } from '@styled-icons/bootstrap'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const navigation = [
	{ name: 'About', href: '#about' },
	{ name: 'Register', href: 'https://form.jotform.com/220867247316156' },
	{ name: 'Instagram', href: 'https://www.instagram.com/dyasoutheast/' },
	{ name: 'Location', href: 'https://goo.gl/maps/3u93qzFCUYpBTRGL7' },
]

export const Navbar = ({ current = "Home" }) => {
	return (
		<Disclosure as="nav" className="bg-white shadow font-normal">
			{({ open }) => (
				<>
					<div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
						<div className="absolute flex h-16 items-center justify-center">
							<Link href="/">
								<a>
									<p className="text-5xl font-normal barlow">SOURCE 2.0</p>
								</a>
							</Link>
						</div>

						<div className="flex h-16">
							<div className="flex mx-auto my-auto">
								{/* absolute right-0 */}
								<div className="hidden sm:block sm:ml-6 ">
									<div className="flex space-x-4">
										{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
										{navigation.map((item) => (
											<a key={item.name} href={item.href} className={classNames(
												(item.name == current) ? 'text-gray-900 border-violet-500' : 'border-violet-800 text-gray-900 hover:text-orange-400',
												'border-b-3 px-3 py-2 pb-1 mb-1 font-medium font-sans text-xl transition ease-in-out duration-200 tracking-wide'
											)}>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div> 

							<Link href="https://www.instagram.com/dyasoutheast/" passHref>
								<Instagram size="30" className="text-black my-auto mx-4 lg:mx-0 hover:cursor-pointer hover:text-orange-400 transition duration-150 "/>
							</Link>

							<div className="-mr-2 flex sm:hidden">
								{/* Mobile menu button */}

								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 barlow">
							{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
							{navigation.map((item) => (
								<Disclosure.Button as="a" key={item.name} href={item.href} className={classNames(
									(item.name == current) ? 'bg-violet-900 text-white block' : 'text-gray-200 hover:bg-orange-400 hover:text-white',
									'block px-3 py-2 rounded-md text-base tracking-wider'
								)}>
									<p className="text-black">{item.name}</p>
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)

}