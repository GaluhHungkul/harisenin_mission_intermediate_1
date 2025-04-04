import {  faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useState } from 'react'

const genres : string[] = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller"
]

const bantuan : string[] = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"]

const Footer = () => {

    const [showGenre, setShowGenre] = useState<boolean>(false)
    const [showBantuan, setShowBantuan] = useState<boolean>(false)

  return (
    <footer className="p-5 flex flex-col gap-10 border-t border-gray-600 lg:py-[60px] lg:px-20 lg:flex-row lg:justify-between ">
        <div>
            <img src="assets/img/others/logo_desktop.png"  className="w-20 h-9 mb-4 lg:w-36 lg:h-16" alt="" />
            <p style={{color: "#C1C2C4"}} className="text-[12px] lg:text-[16px]">@2023 Chill All Rights Reserved.</p>
        </div>
        <div className="lg:flex lg:justify-between  lg:w-max lg:gap-20">
            <section className="flex mb-2  text-white flex-col lg:items-start lg:gap-2 text-[16px]">
                <div className="lg:text-xl flex justify-between w-full cursor-pointer" onClick={() => setShowGenre(!showGenre)}>
                    <span>Genre</span>
                    <button className={`font-bold lg:hidden hover:text-gray-500 ${showGenre && "rotate-90"} duration-300`} onClick={() => setShowGenre(!showGenre)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <ul className={`mt-2 pl-4 grid-cols-2 mb-2 gap-y-2 lg:pl-0 text-gray-400 lg:grid  ${showGenre ? "genre" : "hidden"}`} >
                    {genres.map((genre, index) => (
                        <li key={index} className="hover:text-gray-500">{genre}</li>
                    ))}
                </ul>
            </section>
            <section className="flex   text-white flex-col lg:items-start lg:gap-2 text-[16px] ">
                <div className="lg:text-xl  flex justify-between w-full cursor-pointer mb-2" onClick={() => setShowBantuan(!showBantuan)}>
                    <span>Bantuan</span>
                    <button className={`font-bold lg:hidden hover:text-gray-500 ${showBantuan && "rotate-90"} duration-300`} onClick={() => setShowGenre(!showGenre)}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <ul className={`mt-2 pl-4 grid-cols-2 mb-2 gap-y-2 lg:pl-0 text-gray-400 lg:grid  ${showGenre ? "genre" : "hidden"}`} >
                    {bantuan.map((item,index) => (
                        <li className="hover:text-gray-500" key={index}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    </footer>
  )
}

export default Footer