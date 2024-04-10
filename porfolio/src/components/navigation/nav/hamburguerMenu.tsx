import Link from 'next/link';
import handleSection from '@/components/functions/sectioned';
import { useState, useRef, useEffect } from 'react';

const HamburguerMenu = ({section2}:any) => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300`;
	const HMenu: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const ButtonMenu: React.RefObject<HTMLButtonElement> =
		useRef<HTMLButtonElement>(null);

		const handleSection = (e: any, section:any) =>{
			e.preventDefault()
			window.scrollTo({
				top:  section.current.offsetTop -  0,
				behavior: "smooth"
			})
			setIsOpen(false)
		}


	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	});

	const handleOutsideClick = (e: any) => {
		if (
			HMenu.current &&
			!HMenu.current.contains(e.target) &&
			!ButtonMenu.current?.contains(e.target)
		) {
			setIsOpen(false);
		}
	};

	return (
		<div className='flex md:hidden items-end justify-center w-full h-14 bg-transparent flex-col h-'>
			<button
				ref={ButtonMenu}
				className='flex flex-col h-12 w-12 m-2 border-0.5 border-white rounded justify-center items-center group z-40'
				onClick={() => {
					setIsOpen(!isOpen);
				}}>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? 'rotate-45 translate-y-[0.4px] opacity-50 group-hover:opacity-100'
							: ''
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? 'opacity-0'
							: ''
					}`}
				/>
				<div
					className={`${genericHamburgerLine} ${
						isOpen
							? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
							: ''
					}`}
				/>
			</button>
			{isOpen ? (
				<>
					<div className='fixed w-full top-0 left-0 z-20 h-full bg-gray-800/5 backdrop-blur-sm overflow-hidden' />
					<aside
						ref={HMenu}
						className='fixed z-30 top-0 bg-black bg-opacity-80 w-full h-[50%] pt-10 animate-fade-left animate-duration-[1500ms]'>
						<ul className='flex items-center p-5 text-center gap-y-10 flex-col text-white w-full'>
							<li>
								<button onClick={(e) => handleSection(e, section2)}>
									<p>Projects</p>
								</button>
							</li>
							<li>
							<Link href='/contact'>
								<p>Contact</p>
							</Link>
							</li>
						</ul>
						<div className=' m-5 flex flex-row justify-end items-center gap-x-5'>
							<Link href='#'>
								<p>Resumen</p>
							</Link>
						</div>
					</aside>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default HamburguerMenu;
