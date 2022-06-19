import gear from '../../../assets/gear.png'

export default function HalamanUtama() {
  const kelasNavigasi = 'w-full h-full flex items-center justify-center border-t-2 border-b-2 border-l-2 border-black';

  return (
    <div id="halaman-utama" className="h-screen w-screen flex flex-col">
      <div id="header" className="w-full flex flex-row">
        <div className="w-28 h-28 p-4 flex items-center justify-center" >
          <img src={gear} />
        </div>
        <div className="w-full h-28 pl-4 flex items-center" >
          <h1 className="font-libre-baskerville text-black text-5xl">Club Motor Agitryan</h1>
        </div>
      </div>
      <div id="navigasi-1" className="w-full h-12 flex flex-row" >
        <div id="home" className='w-24 h-full flex items-center justify-center border-t-2 border-b-2 border-black'>
          <h2>Home</h2>
        </div>
        <div className='flex flex-row w-full'>
          <h2 className={kelasNavigasi}>Profile</h2>
          <h2 className={kelasNavigasi}>Visi dan Misi</h2>
          <h2 className={kelasNavigasi}>Produk kami</h2>
          <h2 className={kelasNavigasi}>Kontak kami</h2>
          <h2 className={kelasNavigasi}>About us</h2>
        </div>
      </div>
      <div id="frame-konten-utama" className="w-full h-full flex flex-row" >
        <div id="navigasi-2" className="w-24 h-full bg-yellow-600" />
        <div id="konten-utama-2" className="w-full h-full bg-red-600" />
      </div>
    </div>
  );
}
