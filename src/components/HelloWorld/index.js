// Uncomment baris kode di bawah ini untuk meng-import gambar logo devcode yang berada di dalam folder assets
// import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      {/* Tambahkan gambar logo devcode yang sudah diimport sebelumnya ke dalam properti src pada elemen img di bawah ini */}
      {/* <img data-cy="devcode-logo" src={} alt="devcode logo" /> */}
      <div data-cy="devcode-title">
        {/* Tambahkan elemen heading 1 di bawah ini dengan berisi kalimat I'm ready for the next challenge! */}
      </div>
    </div>
  );
};
