import React from 'react'
import { listProyek } from '../data'



const Proyek = () => {

    const toolColors = [
        "bg-red-500/20 text-red-300 border-red-400/30",
        "bg-blue-500/20 text-blue-300 border-blue-400/30",
        "bg-green-500/20 text-green-300 border-green-400/30",
        "bg-purple-500/20 text-purple-300 border-purple-400/30",
        "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
        "bg-pink-500/20 text-pink-300 border-pink-400/30",
    ];


    return (
        <>
            <section id='proyek' className='proyek text-white pt-15 px-10' >
                <h2 className='text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent' data-aos="fade-up">Project</h2>
                <p className='text-base/loose text-center mt-2 opacity-50' data-aos="fade-up">Berikut ini beberapa project yang telah saya buat</p>
                <div className="proyek-box justify-center grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 pt-4">
                    {listProyek.map(proyek => (
                        <div key={proyek.id} className='bg-slate-900 h-[400px] justify-center rounded-3xl transition hover:-translate-y-1' data-aos="fade-up">
                            <img src={proyek.gambar} alt="" className='w-full h-50 rounded-tr-3xl rounded-tl-3xl' loading='lazy' />
                            <div className="konten px-5 mt-5 group">
                                <div className='flex justify-between gap-4'>
                                    <p className='text-md font-bold'>{proyek.nama}</p>
                                    <a href={proyek.link}>
                                        <i className="ri-arrow-right-up-line ri-md text-white p-2 rounded-full bg-zinc-600 hover:bg-zinc-700"></i>
                                    </a>
                                </div>
                                <p className='text-xs my-5 text-zinc-400'>{proyek.desk}</p>
                                <div className='flex gap-2 mt-4 flex-wrap'>
                                    {proyek.tools.map((tools, index) => (
                                        <span key={index} className={`py-1 px-2 rounded-full text-xs font-medium transition hover:-translate-y-0.5 ${toolColors[index % toolColors.length]}`}>
                                            {tools}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Proyek