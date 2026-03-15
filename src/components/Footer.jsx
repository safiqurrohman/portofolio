import React from 'react'
import { useState } from 'react'

const Footer = () => {
    const [activeIcon, setActiveIcon] = useState(null);

    // Fungsi perbaikan untuk scroll tanpa tag <a>
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <div className='footer bg-blue-600 flex text-white sm:justify-between justify-center sm:px-10 sm:py-6 px-5 py-3 sm:pb-0 pb-20 grid sm:grid-cols-3 grid-cols-1 gap-3'>

            {/* Bagian Nama/Logo */}
            <div className="title gap-0 m-0 p-0">
                <h1 className='text-2xl font-semibold'>Portofolio</h1>
                <span className='text-xs mt-[-6px] flex'>-Safiqur Rohman-</span>
            </div>

            {/* Bagian Link Navigasi - Tanpa Tag <a> */}
            <div className='flex gap-6 mb-3 justify-end items-center'>
                <li
                    className='list-none text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300 cursor-pointer'
                    onClick={() => scrollToSection('home')}
                >
                    Beranda
                </li>
                <li
                    className='list-none text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300 cursor-pointer'
                    onClick={() => scrollToSection('tentang')}
                >
                    Tentang
                </li>
                <li
                    className='list-none text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300 cursor-pointer'
                    onClick={() => scrollToSection('proyek')}
                >
                    Proyek
                </li>
            </div>

            {/* Bagian Social Media - Tetap pakai <a> untuk link eksternal */}
            <div className='flex gap-4 mb-3 justify-end items-center'>
                <a href="https://instagram.com/syafi_882" target="_blank" rel="noreferrer"
                    onMouseEnter={() => setActiveIcon('instagram')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i className={`text-4xl transition-all duration-200 ${activeIcon === 'instagram' ? 'ri-instagram-fill' : 'ri-instagram-line'}`}></i>
                </a>

                <a href="mailto:safikur828@gmail.com"
                    onMouseEnter={() => setActiveIcon('email')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i className={`text-4xl transition-all duration-200 ${activeIcon === 'email' ? 'ri-mail-fill' : 'ri-mail-line'}`}></i>
                </a>

                <a href="https://github.com/safiqurrohman" target="_blank" rel="noreferrer"
                    onMouseEnter={() => setActiveIcon('github')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i className={`text-4xl transition-all duration-200 ${activeIcon === 'github' ? 'ri-github-fill' : 'ri-github-line'}`}></i>
                </a>
            </div>
        </div>
    )
}

export default Footer