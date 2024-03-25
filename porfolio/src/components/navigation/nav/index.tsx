import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<div className='w-full h-14 bg-emerald-800 sticky top-0'>
				<div className='container mx-auto px-4 h-full'>
					<div className='flex justify-between items-center h-full'>
						Luciano Carducci
						<ul className='hidden md:flex gap-x-6 text-white '>
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
								<li>
									<Link href='#'>
										<p>Contact</p>
									</Link>
								</li>
						</ul>
						<div className='hidden md:block'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
