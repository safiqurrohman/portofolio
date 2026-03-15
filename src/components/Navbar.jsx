import { useState, useEffect, useRef } from "react"

const Navbar = () => {
    const [active, isActive] = useState(false);
    const menuRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                isActive(true)
            } else {
                isActive(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [menuOpen])


    return (
        <div className='navbar flex justify-between items-center py-4 px-3'>

            <div className="logo">
                <h1 className='text-3xl font-bold bg-black text-white p-1 md:bg-transparent md:text-white md:text-white'>Portofolio</h1>
            </div>
            <div className="menu-icon text-white md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="ri-menu-line text-2xl"></i>
                </button>
            </div>

            <div className="menu flex items-center text-white sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 
                bg-white/10 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none hidden md:flex">
                <li className='list-none rounded-full px-2 py-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5'>
                    <a href="#home" className='sm:text-lg text-base font-medium'>Home</a>
                </li>
                <li className='list-none rounded-full px-2 py-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5'>
                    <a href="#tentang" className='sm:text-lg text-base font-medium'>About</a>
                </li>
                <li className='list-none rounded-full px-2 py-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5'>
                    <a href="#proyek" className='sm:text-lg text-base font-medium'>Proyek</a>
                </li>
                <li className='list-none rounded-full px-2 py-1 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5'>
                    <a href="#kontak" className='sm:text-lg text-base font-medium'>Contact</a>
                </li>
            </div>

            {/* Set Open Menu  */}
            <div
                ref={menuRef}
                className={`
                    md:hidden fixed top-10 left-1/2 -translate-x-1/2
                    w-[95%]
                    bg-white/10 backdrop-blur-md
                    rounded-2xl p-4 z-50
                    flex flex-col gap-4 text-white
                    transition-all duration-300 ease-out
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
                    ${active ? 'hidden' : 'block'}
                `}
            >
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#tentang" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#proyek" onClick={() => setMenuOpen(false)}>Proyek</a>
                <a href="#kontak" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>

        </div >
    )
}

export default Navbar
