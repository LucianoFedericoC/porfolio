import Link from 'next/link';
import logo from '../../assets/SVG/logo.svg';
import github from '../../assets/SVG/github.svg';
import gmail from '../../assets/SVG/gmail.svg';
import linkedin from '../../assets/SVG/linkedin.svg';
import Navbar from '../navigation/nav';
import Image from 'next/image';

const Home = () => {
	return (
		<>
			<div className='w-full h-screen bg-[#1c1d25] overflow-hidden'>
				<Navbar />
				<header className='h-screen'>
					<Image
						className='absolute top-[40%] left-[45%] opacity-80 animate-fadein'
						src={logo}
						alt='logo'
					/>
					<div className='absolute w-full top-2/4 left-0 z-10 animate-slidein'>
						<div className='w-[1000px] m-auto flex flex-col'>
							<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
								<h1 className='font-black text-6xl mb-5'>
									Luciano Carducci
								</h1>
							</div>
							<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
								<h3 className='text-2xl mb-5'>
									Full stack web developer
								</h3>
							</div>
							<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
								<Link href='#' className='w-24 h-36 bg-red-600'>
									AboutMe
								</Link>
							</div>
						</div>
					</div>
					<div className='absolute top-[50%] right-[1%] flex flex-col items-center gap-y-6 z-10'>
						<Link className='hover:-translate-y-1 hover:scale-110 duration-300' href='https://github.com/LucianoFedericoC' target="_blank">
							<Image
								src={github}
								alt='github'
								className='bg-white rounded-sm'
							/>
						</Link>
						<Link className='hover:-translate-y-1 hover:scale-110 duration-300' href='#'>
							<Image
								src={gmail}
								alt='gmail'
								className='bg-white rounded-sm'
							/>
						</Link>
						<Link className='hover:-translate-y-1 hover:scale-110 duration-300' href='https://www.linkedin.com/in/lucianofedericocarducci/' target="_blank">
							<Image
								src={linkedin}
								alt='gmail'
								className='bg-white rounded-sm'
							/>
						</Link>
					</div>
				</header>
				<section className='bg-red-700 h-screen w-full'>
					<h1>hola</h1>
				</section>
			</div>
		</>
	);
};

export default Home;
