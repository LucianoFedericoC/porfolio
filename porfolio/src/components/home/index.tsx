import Link from 'next/link';

const Home = () => {
	return (
		<div className='w-full h-full'>
			<header className='h-screen overflow-hidden bg-[#1c1d25]'>
				<div className='absolute w-full top-2/4 left-0 z-10 box-border'>
					<div className='pl-14 w-[1000px] m-auto flex flex-col'>
						<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
							<h1 className='font-black text-6xl mb-5'>
								Luciano Carducci
							</h1>
						</div>
						<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
							<h3 className='text-2xl mb-6'>
								Full stack web developer
							</h3>
						</div>
						<div className='inline-block relative pt-3 pr-3 overflow-hidden'>
							<Link href='#'>AboutMe</Link>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Home;
