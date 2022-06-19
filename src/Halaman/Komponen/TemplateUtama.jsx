import gear from '../../../assets/gear.png'

export default function TemplateUtama(props) {
  const { children } = props;
  const kelasNavigasi = 'w-full h-full flex items-center justify-center border-t-2 border-b-2 border-l-2 border-black hover:bg-gray-200';

  return (
    <div id="halaman-utama" className="h-screen w-screen flex flex-col">
      <div id="header" className="w-full flex flex-row">
        <div className="w-32 h-32 p-4 flex items-center justify-center" >
          <img src={gear} />
        </div>
        <div className="w-full h-32 pl-4 flex items-center" >
          <h1 className="font-libre-baskerville text-black text-5xl">Club Motor Agitryan</h1>
        </div>
      </div>
      <div id="navigasi-1" className="w-full h-12 flex flex-row" >
        <button id="home" type='button' className='w-28 h-full flex items-center justify-center border-t-2 border-b-2 border-black hover:bg-gray-200'>
          <h2>Home</h2>
        </button>
        <div className='flex flex-row w-full'>
          <button type='button' className={kelasNavigasi}>Profile</button>
          <button type='button' className={kelasNavigasi}>Visi dan Misi</button>
          <button type='button' className={kelasNavigasi}>Produk kami</button>
          <button type='button' className={kelasNavigasi}>Kontak kami</button>
          <button type='button' className={kelasNavigasi}>About us</button>
        </div>
      </div>
      <div id="frame-konten-utama" className="w-full h-full flex flex-row" >
        <div id="navigasi-2" className="w-28 h-full flex flex-col pl-2 gap-1" >
          <div className='h-4' />
          <button type='button' className='text-left hover:bg-gray-200'>Artikel</button>
          <button type='button' className='text-left hover:bg-gray-200'>Event</button>
          <button type='button' className='text-left hover:bg-gray-200'>Gallery Foto</button>
          <button type='button' className='text-left hover:bg-gray-200'>Klien Kami</button>
          <button type='button' className='text-left hover:bg-gray-200'>Login</button>
          <button type='button' className="pl-4 text-left hover:bg-gray-200">Sign in</button>
          <button type='button' className="pl-4 text-left hover:bg-gray-200">Sign up</button>
        </div>
        <div id="konten-utama-2" className="w-full h-full border-l-2 border-black">
          {children}
        </div>
      </div>
    </div>
  );
}