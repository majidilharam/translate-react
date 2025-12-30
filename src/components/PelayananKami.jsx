import { CheckCircle } from "react-feather"


function PelayananKami() {

  return (
    <div className="flex flex-col md:flex-row py-12 justify-center items-center lg:py-8 px-16 gap-8">
      <img src="/bpkb.png" alt="image" />
      <div className="flex flex-col gap-6 ">
        <h1 className="font-semibold text-2xl leading-none text-gray-900 ">Mengapa Memilih Layanan Kami?</h1>
        <p className="font-normal text-base leading-relaxed text-gray-600  ">Kami berkomitmen memberikan pengalaman pengurusan dokumen
          yang cepat, aman, dan
          bebas ribet. Setiap proses dilakukan dengan profesional dan
          penuh transparansi.</p>

        <div className="space-y-2 ">
          <div className="flex items-start space-x-2">
            <CheckCircle className="text-green-700" /><span
              className="font-normal text-base leading-relaxed text-gray-700">Proses Cepat & Efisien</span>
          </div>

          <div className="flex items-start space-x-2">
            <CheckCircle className="text-green-700" /><span
              className="font-normal text-base leading-relaxed text-gray-700">Aman & Terpercaya</span>
          </div>

          <div className="flex items-start space-x-2">
            <CheckCircle className="text-green-700" /><span
              className="font-normal text-base leading-relaxed text-gray-700">Harga Jujur & Transparan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PelayananKami
