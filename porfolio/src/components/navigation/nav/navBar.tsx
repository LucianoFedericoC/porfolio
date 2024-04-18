import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/SVG/logo.svg';
import handleSection from '@/actions/sectioned';
import DarkModeSwitch from './darkModeSwitch';

const Navbar = ({ section2 }: any) => {
	return (
		<>
			<div className='w-full h-14 bg-transparent top-0 hidden md:block'>
				<div className='mx-auto px-4 pt-3'>
					<div className='flex justify-between items-center'>
						<div className='text-nowrap gap-x-5 items-center hidden md:flex'>
							<Image src={logo} alt='logo' className='size-10' />
							<h1 className='dark:text-portfolio-antiFlashWhite text-black'>
								Luciano Carducci
							</h1>
						</div>
						<ul className='hidden md:flex gap-x-10 w-full justify-end mx-4 items-center'>
							<li className='flex  item-center'>
								<DarkModeSwitch />
							</li>
							<li>
								<button
									onClick={(e) => handleSection(e, section2)}>
									<p className='hover:scale-105 duration-75 dark:text-portfolio-antiFlashWhite text-black'>
										Projects
									</p>
								</button>
							</li>
							<li>
								<Link href='/contact'>
									<p className='hover:scale-105 duration-75 dark:text-portfolio-antiFlashWhite text-black'>
										Contact
									</p>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<p className='hover:scale-105 duration-75 dark:text-portfolio-antiFlashWhite text-black'>
										Resume
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
