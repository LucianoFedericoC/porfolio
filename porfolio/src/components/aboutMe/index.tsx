const AboutMe = () => {
	return (
		<div>
			<h1>hola</h1>
			<div className='flex flex-row justify-between md:w-1/4 w-2/4 h-8 relative pt-3 pr-3 overflow-hidden ml-4 md:ml-0'>
				<div className='text-sm md:text-xl [text-wrap:balance]'>
					<span className='text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
						<ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
							<li>Hola</li>
							<li>Hola</li>
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
			</div>
		</div>
	);
};

export default AboutMe;
