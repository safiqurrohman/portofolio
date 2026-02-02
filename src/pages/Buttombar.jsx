import React, { useState, useEffect } from 'react'


const sections = ["home", "tentang", "proyek", "kontak"]

const Buttombar = () => {
    const [active, setActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');


    // untuk menampilkan button jika di buka di layar kecil
    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 150)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // untuk mengaktifkan menu 
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0
            }
        )

        sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])


    return (
        <div className={`
            fixed bottom-4 left-1/2 -translate-x-1/2
            w-[95%] h-17
            bg-blue-800 text-white
            rounded-full
            flex justify-center items-center
            md:hidden group
            transition-all duration-500 ease-out
            shadow-lg group
            ${active
                ? 'translate-y-0 opacity-100 pointer-events-auto'
                : 'translate-y-20 opacity-0 pointer-events-none'}
            `}
        >
            <div className="flex bg-blue-900 w-full justify-between items-center rounded-full h-full gap-1 px-2">

                <MenuItem
                    label="Home"
                    iconLine="ri-home-4-line"
                    iconFill="ri-home-5-fill"
                    active={activeSection === "home"}
                    onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}
                />
                <MenuItem
                    label="About"
                    iconLine="ri-shield-user-line"
                    iconFill="ri-shield-user-fill"
                    active={activeSection === "tentang"}
                    onClick={() => document.getElementById("tentang").scrollIntoView({ behavior: "smooth" })}
                />
                <MenuItem
                    label="Project"
                    iconLine="ri-projector-line"
                    iconFill="ri-projector-fill"
                    active={activeSection === "proyek"}
                    onClick={() => document.getElementById("proyek").scrollIntoView({ behavior: "smooth" })}
                />
                <MenuItem
                    label="Contact"
                    iconLine="ri-user-line"
                    iconFill="ri-user-3-fill"
                    active={activeSection === "kontak"}
                    onClick={() => document.getElementById("kontak").scrollIntoView({ behavior: "smooth" })}
                />
            </div>
        </div>
    )
}

const MenuItem = ({ label, iconLine, iconFill, active, onClick }) => (
    <li className='list-none'>
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center rounded-full px-4 py-2 transition-all duration-400 ${active ? 'bg-white/30 text-white scale-105' : 'text-white/70'}`}
        >
            <i className={`${active ? iconFill : iconLine} text-2xl`}></i>
            <span className='text-xs'>{label}</span>
        </button>
    </li >
)

export default Buttombar
