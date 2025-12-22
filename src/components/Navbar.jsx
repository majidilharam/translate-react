

function Navbar() {
  return (

    <div className="flex flex-col sm:flex-row items-center gap-4 justify-between lg:px-16 py-4 border-b-0 shadow-sm sticky top-0 z-50 bg-white ">
      <h1 className="text-3xl text-[#4C83FD] font-bold leading-tight ">Biro Jasa Amman</h1>
      <div className="space-x-8 font-normal text-2xl leading-none tracking-normal text-black ">
        <a href="#beranda" className="cursor-pointer  hover:text-blue-400">Beranda</a>
        <a href="#layanan" className="cursor-pointer hover:text-blue-400">Layanan</a>
        <a href="#kontak" className="cursor-pointer hover:text-blue-400">Kontak</a>
      </div>
    </div>
    


  )
}

export default Navbar
