import React from 'react'
import { useState } from 'react'

const Footer = () => {
    const [activeIcon, setActiveIcon] = useState(null);


    return (
        // <div className='bg-red-600 w-full'>
        <div className='footer bg-blue-600 flex text-white sm:justify-between justify-center sm:px-10 sm:py-6 px-5 py-3 sm:pb-0 pb-20 grid sm:grid-cols-3 grid-cols-1 gap-3'>
            <div className="title gap-0 m-0 p-0">
                <h1 className='text-2xl font-semibold'>Portofolio</h1>
                <span className='text-xs mt-[-6px] flex'>-Safiqur Rohman-</span>
            </div>
            <div className='flex gap-6 mb-3 justify-end'>
                <a href="#" className='text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300'>Beranda</a>
                <a href="#" className='text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300'>Tentang</a>
                <a href="#" className='text-sm text-white/80 font-semibold hover:text-white/100 hover:underline transition-all hover:-translate-y-0.5 duration-300'>Proyek</a>
            </div>
            <div className='flex gap-4 mb-3 justify-end'>
                <a href="#"
                    onMouseEnter={() => setActiveIcon('instagram')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i className={`text-4xl transition-all duration-200 ${activeIcon === 'instagram' ? 'ri-instagram-fill' : 'ri-instagram-line'
                        }`}></i>
                </a>
                <a href="#"
                    onMouseEnter={() => setActiveIcon('email')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i class={`text-4xl transition-all duratin-200 ${activeIcon === 'email' ? 'ri-mail-ai-fill' : 'ri-mail-line'}`}></i>
                </a>
                <a href="#"
                    onMouseEnter={() => setActiveIcon('github')}
                    onMouseLeave={() => setActiveIcon(null)}
                >
                    <i class={`text-4xl transition-all duration-200 ${activeIcon === 'github' ? 'ri-github-fill' : 'ri-github-line'}`}></i>
                </a>

            </div>
        </div>
    )
}

export default Footer