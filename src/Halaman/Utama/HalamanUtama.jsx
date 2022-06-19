export default function HalamanUtama() {
  return (
    <div id="halaman-utama" className="h-screen w-screen flex flex-col">
      <div id="header" className="w-full flex flex-row">
        <div className="w-28 h-28 bg-green-300" />
        <div className="w-full h-28 bg-red-300" />
      </div>
      <div id="navigasi-1" className="w-full h-12 bg-sky-400" />
      <div id="frame-konten-utama" className="w-full h-full flex flex-row" >
        <div id="navigasi-2" className="w-24 h-full bg-yellow-600" />
        <div id="konten-utama-2" className="w-full h-full bg-red-600" />
      </div>
    </div>
  );
}
