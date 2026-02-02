import DataImage from '../data'
import { listTools } from '../data'

const Tentang = () => {
    return (
        <section id='tentang' className='mt-20 flex items-center justify-center px-5'>
            <div className='grid grid-cols-1 juftify-space-between'>
                <div className='inline-flex justify-center'>
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
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div className="rounded-3xl dark:border-slate-800">
                        <div className="flex items-center justify-center mt-4">
                            <img src={DataImage.HeroImage} alt="" className='w-90 max-w-md' />
                        </div>
                    </div>
                    <div className="space-y-10 mt-8">
                        <p className="text-lg text-slate-500 max-w-xl">
                            Hello, I'm Alex — A Full Stack Developer passionate about building accessible,
                            performant, and visually stunning web applications.
                        </p>

                        <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-6 space-y-4 text-slate-600 dark:text-slate-300">
                            <p>
                                I specialize in JavaScript ecosystems and love solving real-world problems with clean code.
                            </p>
                            <p>
                                I believe in continuous learning and contributing to open-source communities.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <p className="text-xs text-slate-400">Experience</p>
                                <p className="text-xl font-bold text-white">Fresh graduate</p>
                            </div>
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <p className="text-xs text-slate-400">Projects</p>
                                <p className="text-xl font-bold text-white">4+</p>
                            </div >
                            <div className="p-4 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <p className="text-xs text-slate-400">Satisfaction</p>
                                <p className="text-xl font-bold text-white">100%</p>
                            </div>
                        </div>

                        <div className="gap-4 mt-10 md:mt-14">
                            <p className='text-white text-2xl font-bold'>Tools</p>
                            <div className="tools mt-2 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-4">
                                {listTools.map((item) => (
                                    <div key={item.id} className='flex cursor-pointer items-center gap-2 p-3 border border-zinc-500 rounded-md hover:bg-zinc-800 group transition hover:-translate-y-2'>
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