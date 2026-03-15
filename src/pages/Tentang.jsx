import DataImage from '../data'
import { listTools } from '../data'

const Tentang = () => {
    return (
        <section id='tentang' className='mt-20 flex items-center justify-center px-5' >
            <div className='grid grid-cols-1 juftify-space-between'>
                <div className='inline-flex justify-center' >
                    <span data-aos="fade-up" className="inline-flex absolute gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-500 text-xs font-bold">
                        <span className="">verified</span>
                        About Me
                    </span>

                    <h5 data-aos="fade-up" className="text-md md:text-4xl font-extrabold leading-tight text-white mt-10">
                        Informatics
                        <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent mx-2">
                            Engineering
                        </span>
                    </h5>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 ">
                    <div className="rounded-3xl dark:border-slate-800 " >
                        <div className="flex items-center justify-center">
                            <img src={DataImage.HeroAbout} alt="" className='w-90 max-w-xl' data-aos="fade-up"/>
                        </div>
                    </div>
                    <div className="space-y-10 mt-8" >
                        <p className="text-lg text-slate-500 max-w-xl" data-aos="fade-up">
                            Halo, saya <strong>Safiqur Rohman</strong>, Full Stack Developer yang fokus membangun aplikasi web yang cepat, fungsional, dan modern.
                        </p>

                        <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-4 text-slate-600 dark:text-slate-300">
                            <p data-aos="fade-up">
                                saya memiliki minat besar dalam membangun aplikasi dari sisi tampilan dan juga backend. Saya berusaha menulis kode yang rapi, terstruktur, dan memastikan setiap proyek dapat memberikan solusi yang bermanfaat bagi pengguna.
                            </p>

                            <p data-aos="fade-up">
                                Saya juga senang mempelajari teknologi baru dan terus mengembangkan kemampuan saya. Saat ini saya berfokus meningkatkan keterampilan agar dapat mengikuti standar industri serta berkontribusi secara efektif dalam tim maupun proyek profesional.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-up">
                                <p className="text-xs text-slate-400" data-aos="fade-up">Experience</p>
                                <p className="text-xl font-bold text-white" data-aos="fade-right">Fresh graduate</p>
                            </div>
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-up">
                                <p className="text-xs text-slate-400" data-aos="fade-up">Projects</p>
                                <p className="text-xl font-bold text-white" data-aos="fade-right">5+</p>
                            </div >
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800" data-aos="fade-up">
                                <p className="text-xs text-slate-400" data-aos="fade-up">Satisfaction</p>
                                <p className="text-xl font-bold text-white" data-aos="fade-right">100%</p>
                            </div>
                        </div>

                        <div className="gap-4 mt-10 md:mt-14">
                            <p className='text-white text-2xl font-bold' data-aos="fade-up">Tools</p>
                            <div className="tools mt-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4">
                                {listTools.map((item) => (
                                    <div key={item.id} className='flex cursor-pointer items-center gap-2 p-3 border border-zinc-500 rounded-md hover:bg-zinc-800 group transition hover:-translate-y-2' data-aos="fade-up">
                                        <img src={item.gambar} alt="gambar tools" className='w-12 bg-zinc-800 p-2 rounded-full' loading='lazy' data-aos="fade-up"/>
                                        <div className='text-white' data-aos="fade-right">
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