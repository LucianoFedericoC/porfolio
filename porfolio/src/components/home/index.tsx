'use client';
import Link from 'next/link';
import logo from '../../assets/SVG/logo.svg';
import github from '../../assets/SVG/github.svg';
import gmail from '../../assets/SVG/gmail.svg';
import linkedin from '../../assets/SVG/linkedin.svg';
import upArrow from '../../assets/SVG/upArrow.svg';
import HTML5Icon from '../../assets/SVG/html5Icon.svg';
import Navbar from '../navigation/nav/navBar';
import Image from 'next/image';
import handleSection from '../functions/sectioned';
import HamburguerMenu from '../navigation/nav/hamburguerMenu';
import { useRef, useEffect, useState } from 'react';
import { SectionRef } from './domain/home/home.interface';

const Home = () => {
	const section_1 = useRef<SectionRef>(null);
	const section_2 = useRef(null);
	const header = useRef(null);

	const [showButton, setShowButton] = useState(false);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.scrollY + window.innerHeight <=
				(section_1.current?.offsetTop ?? 0) - 0
			) {
				setShowButton(false);
			} else {
				setShowButton(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className='w-full h-full'>
				<header ref={header} className='h-screen bg-portfolio-grayBg'>
					<Navbar section2={section_2} />
					<HamburguerMenu section2={section_2} />
					<Image
						className='absolute flex md:top-[40%] md:left-[45%] left-[25%] top-[20%] md:size-max size-2/4 opacity-60 animate-fade animate-once animate-duration-[3000ms] animate-ease-in'
						src={logo}
						alt='logo'
					/>
					<div className='absolute w-full h-full flex items-center justify-around md:flex-row flex-col z-10'>
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
							<div
								className='flex relative pt-3 pr-3 overflow-hidden md:ml-0 ml-4'>
								<button
									onClick={(e) => handleSection(e, section_1)}
									className='flex w-28 h-12 justify-center items-center text-white bg-red-500 font-semibold rounded-md hover:scale-90 duration-300'>
									About me
								</button>
							</div>
							{/* <div className='flex md:flex-row flex-col justify-between md:w-1/4 w-2/4 h-36 relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
								<div className='text-sm md:text-xl [text-wrap:balance]'>
									<span className='text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
										<ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
											<li><Image src={github} alt='HTMLICON'/></li>
											<li><Image src={github} alt='HTMLICON'/></li>											
											<li aria-hidden='true'>Hola</li>
										</ul>
									</span>
								</div>
								<div className='text-sm md:text-xl [text-wrap:balance]'>
									<span className='text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
										<ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
											<li>Hola</li>
											<li>Hola</li>
											<li aria-hidden='true'>Hola</li>
										</ul>
									</span>
								</div>
							</div> */}
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
								href={`mailto:${process.env.NEXT_PUBLIC_MY_EMAIL}`}>
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
				<section ref={section_1} className='bg-red-700 h-screen w-full'>
					<div>
						<h1>hola</h1>
					</div>
				</section>
				<section
					ref={section_2}
					className='bg-green-700 h-screen w-full'>
					<div>
						<h1>hola</h1>
					</div>
				</section>
				{showButton && (
					<div className='fixed right-5 bottom-5 z-30 animate-fade animate-once animate-duration-[300ms] animate-ease-in'>
						<button
							onClick={handleScrollToTop}
							className='sticky rounded-full size-8 md:size-12'>
							<Image src={upArrow} alt='upArrow' />
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
