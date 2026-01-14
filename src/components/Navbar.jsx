const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Kontak", href: "#kontak" },

]

function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row gap-4 justify-between items-center lg:px-16 py-4 border-b-0 shadow-sm sticky top-0 z-50 bg-white">
      <h1 className="text-3xl text-[#4C83FD] font-bold leading-tight">Biro Jasa Amman</h1>
      <div className="flex gap-6">
        {navItems.map(({href, label},index) => (
          <a key={index}
            href={href}
            className="cursor-pointer hover:text-blue-400 transition space-x-8 font-normal text-2xl leading-none tracking-normal text-black ">
            {label}
          </a>
        ))}
      </div>
    </nav>




  )
}

export default Navbar


