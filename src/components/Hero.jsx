

function Hero() {
  return (
<section id="beranda">
    <div className=" flex flex-col-reverse md:flex-row items-center gap-6 justify-between lg:items-center px-16 py-8 gap-4 ">
      <div className="space-y-3">
        <h1 className="font-bold text-3xl">Layanan Pembuatan & Pengurusan STNK Cepat, Mudah, dan Terpercaya</h1>
        <p className="text-lg leading-6 text-black">Urus STNK tanpa harus antre dan ribet. Mulai dari pembuatan STNK baru,<br />
          perpanjangan, hingga balik nama—semuanya kami tangani dengan cepat, aman, dan<br />
          proses yang transparan. Anda cukup kirim data, sisanya biar kami yang mengurus.</p>
        <button
          type="submit"
          className="flex gap-3 cursor-pointer bg-black rounded-md hover:bg-gray-600 text-white px-3 py-2 transition duration-200"> <img src="/Icons.png" alt="icon" />Konsultasi Sekarang</button>
      </div>
      <img src="/susan-2.png" alt="image" />
    </div>
</section>
  )
}

export default Hero


