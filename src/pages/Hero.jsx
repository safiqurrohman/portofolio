import React from 'react'
import DataImage from '../data'
import Navbar from '../components/Navbar'

const Hero = () => {
    return (
        <>
            <Navbar />
            <section id='home' className='hero justify-center flex  grid md:grid-cols-2 md:px-4 px-10 items-center gap-3 grid-cols-1'>
                <div className='animate__animated animate__fadeInUp animate__delay-1s'>
                    <div className="flex items-center gap-3 mb-4 text-white bg-zinc-800 p-4 rounded-2xl w-fit" data-aos="fade-left">
                        <img src={DataImage.HeroImage} alt="" className='w-10 rounded-lg' loading='lazy' />
                        <p>Kode yang indah, lahir dari ketekunan.😁</p>
                    </div>
                    <h1 className='text-3xl text-white font-bold mb-6'>Hi, Saya Safiqur Rohman</h1>
                    <p className='text-white opacity-50 mb-6 '>
                        Seorang Fullstack Web Developer yang senang membangun
                        aplikasi web modern dan responsif.
                        Dengan keahlian mendalam di React.js untuk sisi frontend dan Laravel
                        untuk pengelolaan backend.
                        Saya senang mentransformasikan ide kompleks menjadi solusi digital
                        yang fungsional.</p>
                    <div className="flex sm:gap-4 gap-2 items-center">
                        <a
                            href="#"
                            className='h-12 px-8 rounded-lg bg-violet-700 hover:bg-violet-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group border border-primary-light/20'>Download CV <i className="ri-download-line ri-lg"></i></a>
                        <a
                            href="#proyek"
                            className='text-white hover:text-black h-12 px-8 rounded-lg bg-white/5 border border-slate-200 dark:border-slate-700 hover:border-accent/50 text-slate-900 dark:text-white font-medium transition-all hover:bg-slate-50 items-center justify-center gap-2 group hover:shadow-[0_0_15px_rgba(244,63,94,0.1)] flex'>View Project <i className="ri-arrow-down-line ri-lg hidden sm:block"></i></a>
                    </div>
                </div>
                <div className='hidden md:flex justify-center animate__animated animate__fadeInDown animate__delay-1s'>
                    <img src={DataImage.HeroAbout} alt="" className='w-[500px]' loading='lazy' />
                </div>
            </section>
        </>
    )
}

export default Hero