import React from 'react'
import Footer from '../components/Footer'

const Kontak = () => {
    return (
        <>
            <section id='kontak' className='kontak mt-10 text-white p-2 md:p-10'>
                <h1 className='text-3xl mb-2 font-bold text-center bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>Kontak</h1>
                <p className='text-base/loose text-center mb-10 opacity-50'>Mari terhubung dengan saya</p>
                <form action="https://formsubmit.co/safikur828@gmail.com" method='POST' className='bg-zinc-800 p-10 sm:w-fit w-full rounded-md mx-auto' autoComplete='off'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Nama Lengkap</label>
                            <input type="text" name='nama' className='border border-zinc-500 rounded-md p-2' placeholder='Masukkan Nama....' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Email</label>
                            <input type="email" name='email' className='border border-zinc-500 rounded-md p-2' placeholder='Masukkan Email....' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-semibold'>Pesan</label>
                            <textarea type="text" name="pesan" id="pesan" cols="50" rows="10" placeholder='Pesan' className='border border-zinc-500 rounded-md p-2' required></textarea>
                        </div>
                        <div className='text-right'>
                            <button type='submit' className='bg-violet-700 hover:bg-violet-500 cursor-pointer text-white p-2 rounded-lg'>Kirim pesan</button>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Kontak