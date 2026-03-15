import DataImage from '../data'
import { listTools } from '../data'

const Tentang = () => {
    return (
        <section id='tentang' className='mt-20 flex items-center justify-center px-5' data-aos="fade-up">
            <div className='grid grid-cols-1 juftify-space-between'>
                <div className='inline-flex justify-center' data-aos="fade-up">
                    <span className="inline-flex absolute gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-500 text-xs font-bold">
                        <span className="">verified</span>
                        About Me
                    </span>

                    <h5 className="text-md md:text-4xl font-extrabold leading-tight text-white mt-10">
                        Informatics
                        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mx-2">
                            Engineering
                        </span>
                    </h5>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 ">
                    <div className="rounded-3xl dark:border-slate-800 " data-aos="fade-right">
                        <div className="flex items-center justify-center">
                            <img src={DataImage.HeroAbout} alt="" className='w-90 max-w-xl' />
                        </div>
                    </div>
                    <div className="space-y-10 mt-8" >
                        <p className="text-lg text-slate-500 max-w-xl" data-aos="fade-left">
                            Halo, saya <strong>Safiqur Rohman</strong> seorang Full Stack Developer yang berfokus pada pengembangan aplikasi web yang inklusif, berperforma tinggi, dan memiliki estetika visual yang kuat.
                        </p>
                        <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-4 text-slate-600 dark:text-slate-300">
                            <p data-aos="fade-left">
                                Sebagai lulusan baru di bidang pengembangan web, saya memiliki ketertarikan besar dalam membangun aplikasi dari sisi tampilan hingga logika belakang layar. Saya fokus pada penulisan kode yang rapi dan berusaha memastikan setiap proyek yang saya kerjakan dapat memberikan solusi yang fungsional bagi penggunanya.
                            </p>
                            <p data-aos="fade-left">
                                Saya adalah seorang pembelajar cepat yang senang mengeksplorasi teknologi baru. Saat ini, saya berfokus untuk terus mengasah kemampuan saya dalam mengikuti standar industri agar dapat berkontribusi secara efektif dalam tim maupun proyek profesional.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-left">
                                <p className="text-xs text-slate-400">Experience</p>
                                <p className="text-xl font-bold text-white">Fresh graduate</p>
                            </div>
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-left">
                                <p className="text-xs text-slate-400">Projects</p>
                                <p className="text-xl font-bold text-white">4+</p>
                            </div >
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-left">
                                <p className="text-xs text-slate-400">Satisfaction</p>
                                <p className="text-xl font-bold text-white">100%</p>
                            </div>
                        </div>

                        <div className="gap-4 mt-10 md:mt-14">
                            <p className='text-white text-2xl font-bold'>Tools</p>
                            <div className="tools mt-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4">
                                {listTools.map((item) => (
                                    <div key={item.id} className='flex cursor-pointer items-center gap-2 p-3 border border-zinc-500 rounded-md hover:bg-zinc-800 group transition hover:-translate-y-2' data-aos="fade-up">
                                        <img src={item.gambar} alt="gambar tools" className='w-12 bg-zinc-800 p-2 rounded-full' loading='lazy' />
                                        <div className='text-white'>
                                            <p className='text-sm font-semibold'>{item.nama}</p>
                                            <p className='text-xs'>{item.ket}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Tentang