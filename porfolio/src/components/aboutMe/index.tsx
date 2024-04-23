import LogosSlider from '../slideLogos';

const AboutMe = () => {
	return (
		<div className='flex items-center justify-center w-2/4 h-3/4 flex-col'>
			<div className='w-full h-auto flex flex-row justify-center items-center mt-10'>
				<div className='w-1/2 h-auto mr-4 border'>
					<h1 className='dark:text-portfolio-orange text-portfolio-black text-left'>
						Sobre mi:
					</h1>
					<h2 className='dark:text-portfolio-orange text-portfolio-black text-justify break-words'>
						asdasdasdasddasasdasdasdasdasdasdadsasdasdsadasddddddddddddddddddddddddddddddasdasdasdasdasdasddasasdasdasdasdasdasdadsasdasdsadasddddddddddddddddddddddddddddddasdasd
					</h2>
				</div>
				<div className='w-1/2 h-auto text-center'>
					{/* Imagen aquí */}
					<div className='h-52 border'>IMAGEN</div>
					<div className='dark:text-portfolio-orange text-portfolio-black border mt-2'>
						otra cosa
					</div>
				</div>
			</div>
			<div className='m-10'>
				<LogosSlider />
			</div>
		</div>
	);
};

export default AboutMe;
