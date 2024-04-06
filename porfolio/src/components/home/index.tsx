'use client';
import Link from 'next/link';
import logo from '../../assets/SVG/logo.svg';
import github from '../../assets/SVG/github.svg';
import gmail from '../../assets/SVG/gmail.svg';
import linkedin from '../../assets/SVG/linkedin.svg';
import Navbar from '../navigation/nav/navBar';
import Image from 'next/image';
import HamburguerMenu from '../navigation/nav/hamburguerMenu';

const Home = () => {
	return (
		<>
			<div className='w-full h-full'>
				<header className='h-screen bg-[#1c1d25]'>
					<Navbar />
					<HamburguerMenu />
					<Image
						className='absolute flex md:top-[40%] md:left-[45%] left-[25%] top-[20%] md:size-max size-2/4 opacity-60 animate-fade animate-once animate-duration-[3000ms] animate-ease-in'
						src={logo}
						alt='logo'
					/>
					<div className='absolute w-full h-full flex items-center justify-around mb- md:flex-row flex-col z-10'>
						<div className='md:w-2/4 md:mx-auto flex flex-col animate-fade-right animate-once animate-duration-[1500ms]'>
							<div className='inline-block relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
								<h1 className='font-black md:text-6xl text-5xl mb-5'>
									Luciano Carducci
								</h1>
							</div>
							<div className='inline-block relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
								<h3 className='md:text-2xl text-sm mb-5'>
									Full stack web developer
								</h3>
							</div>
							<div className='flex relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
								<Link
									href='#'
									className='flex w-28 h-14 bg-red-600 justify-center items-center rounded-md hover:-translate-y-1 hover:scale-90 duration-300'>
									About Me
								</Link>
							</div>
						</div>
						<div className='flex md:flex-col md:mb-0 md:mr-6 mr-0 mb-32 md:gap-y-6 gap-x-6 flex-row z-10'>
							<Link
								className='hover:-translate-y-1 hover:scale-110 duration-300'
								href='https://github.com/LucianoFedericoC'
								target='_blank'>
								<Image src={github} alt='github' />
							</Link>
							<Link
								className='hover:-translate-y-1 hover:scale-110 duration-300'
								href='#'>
								<Image src={gmail} alt='gmail' />
							</Link>
							<Link
								className='hover:-translate-y-1 hover:scale-110 duration-300'
								href='https://www.linkedin.com/in/lucianofedericocarducci/'
								target='_blank'>
								<Image src={linkedin} alt='gmail' />
							</Link>
						</div>
					</div>
				</header>
				<section className='bg-red-700 h-screen w-full'>
					<div>
						<h1>hola</h1>
					</div>
				</section>
				<section className='bg-green-700 h-screen w-full'>
					<div>
						<h1>hola</h1>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;

// absolute md:top-[50%] md:right-0 right-[5%] top-[70%] flex md:flex-col flex-row items-center z-10
