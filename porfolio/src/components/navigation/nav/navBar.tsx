import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/SVG/logo.svg';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-14 bg-transparent top-0 hidden md:block'>
				<div className='mx-auto px-4 pt-3'>
					<div className='flex justify-between items-center'>
						<div className='text-nowrap gap-x-5 items-center hidden md:flex'>
							<Image src={logo} alt='logo' className='size-10' />
							Luciano Carducci
						</div>
						<ul className='hidden md:flex gap-x-10 text-white w-full justify-center'>
							<li>
								<Link href='#'>
									<p>Home</p>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<p>About Me</p>
								</Link>
							</li>
							<li>
								<Link href='#'>
									<p>Projects</p>
								</Link>
							</li>
						</ul>
						<div className='md:flex hidden items-center gap-x-4'>
							<Link href='#'>
								<p>Contact</p>
							</Link>
							<Link href='#'>
								<p>Resumen</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
