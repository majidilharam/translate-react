import { useEffect } from "react"

function HubungiKami() {
    useEffect(() => {
        feather.replace()
    }, [])

    return (
       <section id="kontak">
        <div className="bg-gray-100 py-12 ">
            <div className="text-3xl font-bold text-center pb-16">
                <h1>Hubungi Kami</h1>
            </div>
            <div className=" flex flex-col md:flex-row gap-6 justify-between lg:gap-8 pb-6 px-16">
                <div className="border-0 shadow-xl bg-white rounded-2xl w-fit p-6 ">
                    <h1 className="font-bold text-normal">Kirimkan Kami Pesan</h1>
                    <p className="mb-4 text-gray-500">Punya pertanyaan atau ingin mulai proses pengurusan STNK? Kirimkan pesan Anda, dan tim kami akan membalas secepatnya.</p>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            name="nama"
                            required
                            placeholder="Masukan nama anda"
                            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 " />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="text"
                            name="email"
                            required
                            placeholder="Masukan alamat email anda"
                            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 " />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Pesan Atau Pertanyaan</label>
                        <textarea
                            rows="4"
                            name="pesan"
                            required
                            placeholder="Tulis pesan atau pertanyaan Anda disini"
                            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 "

                        >
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="mb-3 bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-md hover:bg-blue-700 active:bg-blue-800 trastition duration-200 ">
                        kirim pesan
                    </button>
                </div>
                <div className="flex flex-col ">
                    <div className="border-0 shadow-xl rounded-2xl h-fit bg-white p-8 space-y-4 block">
                        <h1>Informasi Kontak</h1>

                        <div className="flex items-start gap-2">
                            <i data-feather="mail" className="w-5 h-5 mt-1 shrink-0" style={{ color: "gray" }}></i>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-500">Email</label>
                                <a className="text-blue-500 cursor-pointer">atri17962@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <i data-feather="phone" className="w-5 h-5 mt-1 shrink-0" style={{ color: "gray" }}></i>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-500">Telephone</label>
                                <a className="text-blue-500 cursor-pointer" >081388267344</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <i data-feather="map-pin" className="w-5 h-5 mt-1 shrink-0" style={{ color: "gray" }}></i>
                            <div className="flex flex-col space-y-2">
                                <label className="text-gray-500">Lokasi</label>
                                <a>Griya Sangiang Mas, Jalan Kemuning V<br /> Blok A11 No. 6, RT.6/RW.8,
                                    Gebang Raya, Periuk, Kota Tangerang, Banten, Indonesia</a>
                            </div>
                        </div>
                    </div>

                    <a className="absolute-bottom-6 pt-6 lg:fixed bottom-25 right-25"><img src="/wa.png" className="cursor-pointer w-12 h-12 md:w-14 h-14" alt="image" /></a>
                </div>
            </div>


        </div>
</section>

    )
}

export default HubungiKami
