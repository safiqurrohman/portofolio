import HeroImage from "/assets/hero-img.webp";
import HeroAbout from "/assets/hero-about.png";

const Image = {
  HeroImage,
  HeroAbout
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/github.png";
import Tools7 from "/assets/tools/canva.png";
import Tools8 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },

  {
    id: 6,
    gambar: Tools6,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },

  {
    id: 7,
    gambar: Tools7,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.webp";


export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Manajemen Pekerjaan",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "CI4", "MYSQL"],
    link: "https://github.com/safiqurrohman/pkl_PTtemprina",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Human Machine Interface",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "Bootstrap", "Javascript", "Laravel 12", "MYSQL"],
    link: "https://github.com/safiqurrohman/pkl_hmi",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Beauty & CO",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Laravel 12", "PHP", "TailwindCSS", "MYSQL", "JavaScript"],
    link: "https://github.com/safiqurrohman/beautystudio",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "ML Deteksi Penyakit Daun",
    desk: "Membuat model machine learning untuk mendeteksi penyakit daun kacang tanah. proyek ini menggabungkan kombinasi arsitektur Efficientnet dan xgboost sebagai model klasifikasi",
    tools: ["Python", "Streamlit", "CSS", "HTML"],
    link: "https://deteksi-kacang-tanah.streamlit.app/",
    dad: "700",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Portfolio Website",
    desk: "Membuat model machine learning untuk mendeteksi penyakit daun kacang tanah. proyek ini menggabungkan kombinasi arsitektur Efficientnet dan xgboost sebagai model klasifikasi",
    tools: ["React", "TailwindCSS", "Vite", "HTML"],
    link: "https://deteksi-kacang-tanah.streamlit.app/",
    dad: "700",
  },
];
