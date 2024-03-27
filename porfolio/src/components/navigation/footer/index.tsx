import ContactButton from './contactButton';

const Footer = () => {
	return (
		<>
			<div className='w-full h-14 bg-emerald-800'>
				<div className='container mx-auto px-4'>
					<div className='flex justify-between items-center'>
						LOGO
						<div className='hidden md:block'></div>
						<ContactButton />
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
