import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="Parentbox">
      <div className="Foto">
        <img src="bmw.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">Cars</p>
        <h1 className="Title">Cars Modified</h1>
        <p className="Price">IDR 1.3xx.xxx.xxx</p>
        <p className="Info">
          BMW (singkatan untuk Bayerische Motoren Werke, atau dalam Bahasa Inggris, Bavarian Motor Works), adalah sebuah perusahaan otomotif Jerman yang memproduksi mobil dan sepeda motor. BMW didirikan pada tahun 1916 oleh Franz Josef Popp. BMW AG adalah perusahaan induk dari merk mobil MINI dan Rolls-Royce, dan, dulunya Rover.
        </p>
        <h1 className="Size">TYPE</h1>
        <div className="Ukuran">
          <button className="S">E350</button>
        </div>
        <h1 className="Tombol">Beli Sekarang</h1>
        <div className="Beli">
          <button className="Buy Now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}



export default App;
