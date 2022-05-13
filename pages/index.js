/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar';
import { Transition } from '@headlessui/react';

import React from 'react';

import { PersonFill, CalendarCheck, PinMap, PinAngle } from '@styled-icons/bootstrap';

/*
SOURCE 2022 is a conference held by the St. Thomas Syro Malabar Diocese of Chicago's youth movement, Diocesan Youth Apostolate (DYA), which brings together high school students, college students, and young adults from across the Southeast Region to learn more about their Syro-Malabar faith while growing in fellowship.
The Southeast Region comprises of the North Carolina, Georgia, and Florida parishes.
This conference was held previously in 2013 and was hosted by St. Joseph's Syro Malabar parish in Tampa.
This year, SOURCE will be held in Asheville, North Carolina from Thursday, June 9th to Sunday, June 12th.
We encourage all youth to attend the event as this will be a great resource for our youth to come together, grow in faith, and build meaningful connections.
Registration started and cost is $250 per person for 4 day stay, 3 nights, and food. Registration link is on DYA Southeast Region Instagram Bio.*/

function Counter() {
	const count = "2022-05-17";
	const [days, setDays] = React.useState(0);
	const [hours, setHours] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	const [seconds, setSeconds] = React.useState(0);

	setInterval(() => {
		const dateNow = new Date().getTime();
		const dif = Date.parse(count) - dateNow;

		setDays(Math.floor(dif / (1000 * 60 * 60 * 24)));
		setHours(Math.floor((dif / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((dif / 1000 / 60) % 60));
		setSeconds(Math.floor((dif / 1000) % 60));
	}, 1000);

	let segment = "p-4 lg:p-8 w-fit rounded bg-white mx-1 lg:mx-2 shadow-lg lg:shadow-2xl";
	let title = "text-m lg:text-1xl";
	let number = "text-3xl lg:text-6xl text-center";

	return (
		<>
			<ul className="flex my-auto font-sans w-full lg:h-[14rem] h-[6rem] justify-center items-center">
				<div className={segment}>
					<p className={number}>{days}</p>
					<p className={title}>Days</p>
				</div>
				<div className={segment}>
					<p className={number}>{hours}</p>
					<p className={title}>Hours</p>
				</div>
				<div className={segment}>
					<p className={number}>{minutes}</p>
					<p className={title}>Minutes</p>
				</div>
				<div className={segment}>
					<p className={number}>{seconds}</p>
					<p className={title}>Seconds</p>
				</div>
			</ul>
		</>
	);
}


export default function Home() {
	return (
		<div>
			<Head>
				<title>Source 2.0</title>
				<meta name="description" content="Website for Source 2.0 Conference" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className="justify-center text-center font-thin">
				<div className="text-white barlow">
					<p className="my-auto text-4xl lg:text-6xl mt-20 lg:mt-40 drop-shadow-2xl">DYA&nbsp;SOUTHEAST &nbsp;REGIONAL&nbsp;TEAM</p>
					<p className="my-auto text-2xl lg:text-4xl py-4 lg:py-15 drop-shadow-2xl">PRESENTS</p>
					<p className="text-white my-auto text-6xl lg:text-[18rem] py-5 lg:py-20 drop-shadow-2xl lumios">SOURCE&nbsp;2.0</p>

					<div className="fill-white w-full mx-auto lg:w-full mb-10 lg:mb-0 h-40 barlow text-2xl justify-center text-center">
						<p className="mx-auto h-10 m-2 block lg:inline w-fit"><PersonFill className="h-10 block lg:inline my-auto m-2 w-fit" />175 Spots</p>
						<p className="mx-auto h-10 m-2 block lg:inline w-fit"><CalendarCheck className="h-10 block lg:inline my-auto m-2 w-fit" />3 Nights</p>
						<p className="mx-auto h-10 m-2 block lg:inline w-fit"><PinMap className="h-10 block lg:inline my-auto m-2 w-fit" />Asherville, NC</p>
					</div>
				</div>


				<div className="image h-[80rem] lg:h-[80rem] blur-sm brightness-75">
					<style jsx>
						{`
						.image {
							position: absolute;
							z-index: -1;
							top: 0;
							right: 0;
							left: 0;
							background-size: cover;
							background-position: center;
							background-image: url(${'/bg2.jpg'});
						}
					`}
					</style>
				</div>

				<div className="w-full h-40 justify-center text-center">
					<Link href="https://form.jotform.com/220867247316156">
						<a className="barlow text-4xl mx-auto h-20 w-fit p-8 bg-white hover:text-orange-400 rounded flex items-center transiton-all duration-200">Register now</a>
					</Link>
				</div>

				<div className="relative w-full lg:w-[70vw] h-[10rem] lg:h-[19rem] bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 mx-auto z-50 shadow-lg lg:shadow-2xl lg:rounded-xl">
					<p className="justify-center text-center text-2xl lg:text-4xl barlow text-white py-2 lg:pt-6">Registration ends in:</p>
					<Counter />
				</div>

				<div className="w-full h-fit -mt-[4rem] lg:-mt-[9.5rem] bg-gray-100 text-center">
					<p id="about" className="text-5xl lg:text-6xl pt-[6rem] lg:pt-[12rem] barlow">About the program</p>
					<br />
					<div className="w-fit lg:w-[60rem] mx-auto barlow text-2xl px-4">
						<p className="">
							SOURCE 2022 is a conference held by the St. Thomas Syro Malabar Diocese of Chicago&apos;s youth movement, Diocesan Youth Apostolate (DYA), which brings together high school students, college students, and young adults from across the Southeast Region to learn more about their Syro-Malabar faith while growing in fellowship.
						</p>
						<br />
						<p>The Southeast Region comprises of the North Carolina, Georgia, and Florida parishes.
							This conference was held previously in 2013 and was hosted by St. Joseph&apos;s Syro Malabar parish in Tampa.
							This year, SOURCE will be held in Asheville, North Carolina from <b className="font-bold">Thursday, June 9th to Sunday, June 12th.</b>
							We encourage all youth to attend the event as this will be a great resource for our youth to come together, grow in faith, and build meaningful connections.
						</p>
						<br />
						<p>
							Registration started and cost is $250 per person for 4 day stay, 3 nights, and food.
						</p>

						<div className="w-full pt-8 h-40 justify-center text-center">
							<Link href="https://form.jotform.com/220867247316156">
								<a className="barlow mt-4 text-4xl mx-auto h-20 w-fit p-8 bg-white hover:text-orange-400 rounded flex items-center transiton-all duration-200 shadow-xl">Register now</a>
							</Link>
						</div>
					</div>

					<p id="about" className="text-5xl lg:text-6xl barlow pb-5">More information</p>
					<div className="lg:w-[60rem] mx-auto barlow text-2xl px-4 h-fit mb-[10rem]">
						<p>Starts <b className="font-bold">Thursday, June 9th and ends on Sunday, June 12th</b> (4 days, 3 nights) 
						This is a stay-in conference so food and accommodations are included in the registration fee
						Location is at a <b className="font-bold">Conference Center</b> in Asheville, North Carolina.
						</p>
						
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.107200750442!2d-82.98177758394317!3d35.5263484460563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859775b31379837%3A0x88b16468f613916c!2sHillside%20Lodge!5e0!3m2!1sen!2sus!4v1652408915850!5m2!1sen!2sus"  className="mx-auto m-4 w-full h-[30rem] lg:w-[40rem]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						<br />
						Registration fee is <b className="font-bold">250$ (USD)</b>
					</div>

					<Link href="https://form.jotform.com/220867247316156">
						<a className="barlow mb-10 -mt-[8rem] text-blue-600 w-fit text-2xl lg:text-3xl mx-auto border-b-2 border-gray-300 hover:border-orange-400 flex items-center transiton-all duration-200">Lake Junaluska Conference center website</a>
					</Link>

					<div className="w-full h-40 justify-center text-center">
						<Link href="https://form.jotform.com/220867247316156">
							<a className="barlow text-4xl mx-auto h-20 w-fit p-8 bg-white hover:text-orange-400 rounded flex items-center transiton-all duration-200 shadow-xl">Register now</a>
						</Link>
					</div>
				</div>

			</main>

			<div className="bg-white flex h-20 lg:h-32 items-center justify-center border-t-2 border-gray-200 drop-shadow-2xl barlow">
				<Transition show={true}
					enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">

					<h2 className="m-auto text-black-200 lg:text-2xl sm:text-sm tracking-wide">
						2022 Source 2.0
					</h2>

				</Transition>
			</div>
		</div>
	)
}
