import { Calendar, Users, FilePlus, Truck } from "react-feather"
const LayananItems = [
    {
        title: 'Perpanjang STNK',
        description: 'Perpanjangan STNK tanpa perlu antre di kantor Samsat. Proses cepat, transparan, dan dapat dilakukan hanya dengan mengirimkan dokumen yang diperlukan.',
        icon: Calendar
    },
    {
        title: 'Balik Nama Kendaraan',
        description: 'Urus perpindahan kepemilikan kendaraan Anda dengan aman dan rapi. Kami tangani proses administrasi hingga STNK baru terbit atas nama Anda.',
        icon: Users
    },
    {
        title: 'Pembuatan STNK Baru',
        description: 'Layanan pembuatan STNK baru untuk kendaraan yang hilang, rusak, atau baru dibeli dari luar daerah. Proses dibantu dari awal sampai selesai.',
        icon: FilePlus
    },
    {
        title: 'Mutasi Kendaraan',
        description: 'Layanan mutasi kendaraan untuk Anda yang pindah domisili atau membeli kendaraan dari luar daerah. Proses dilakukan mulai dari cek fisik, pengurusan berkas, hingga penerbitan data baru sesuai alamat tujuan.',
        icon: Truck
    }
]

function LayananKami() {
    return (
        <section id="layanan">
            <div className="bg-gray-100">
                <div className="text-center">
                    <h1 className="font-bold text-3xl text-center pt-12">Layanan Kami</h1>
                </div>
                <div className="flex flex-col md:flex-row gap-4 p-6 justify-between lg:px-16 py-12">
                    <div className="flex gap-4 p-4 ">
                        {LayananItems.map(({ title, description, icon: Icon }, index) => (
                            <div key={index} className="mb-8">
                                <div className="border-0 shadow-xl p-4 rounded-2xl">
                                    <div className="border-0 rounded-md w-fit p-2 bg-blue-200">
                                        <Icon className="text-blue-500" />
                                    </div>
                                    <h2 className="font-bold my-4">{title}</h2>
                                    <p className="font-medium text-gray-600">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>


    )
}

export default LayananKami
