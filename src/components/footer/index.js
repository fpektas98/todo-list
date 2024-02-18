// React'ten useState hook'unu al
import { useState } from "react";
// CSS dosyasını içe aktar
import './footer.css';

// Footer bileşeni fonksiyonu
function Footer({ onFilter, taskCount, todayTasksCount }) {
  // useState hook'unu kullanarak activeFilter adında bir state tanımla ve varsayılan değeri "all" olsun
  const [activeFilter, setActiveFilter] = useState("all");

  // Filtre butonuna tıklandığında çağrılacak fonksiyon
  const handleFilterClick = (filter) => {
    // activeFilter state'ini güncelle
    setActiveFilter(filter);
    // onFilter prop'undaki fonksiyonu çağır ve filtre değerini ileterek ana bileşeni güncelle
    onFilter(filter);
  };

  // JSX olarak dönen bileşen
  return (
    <div id="footer-container">
      <div id="task-text">
        {/* Toplam görev sayısını gösteren bir paragraf */}
        <p><strong>Total Tasks: {taskCount}</strong></p>
      </div>
      <div id="footer">
        {/* Filtre butonları */}
        <button
          // Eğer aktif filtre "all" ise, butonun class'ına "active" sınıfını ekle; değilse ekleme
          className={activeFilter === "all" ? "active" : ""}
          // Butona tıklandığında handleFilterClick fonksiyonunu çağır ve filtre değerini ileterek güncelleme yap
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          // Eğer aktif filtre "active" ise, butonun class'ına "active" sınıfını ekle; değilse ekleme
          className={activeFilter === "active" ? "active" : ""}
          // Butona tıklandığında handleFilterClick fonksiyonunu çağır ve filtre değerini ileterek güncelleme yap
          onClick={() => handleFilterClick("active")}
        >
          Active
        </button>
        <button
          // Eğer aktif filtre "completed" ise, butonun class'ına "active" sınıfını ekle; değilse ekleme
          className={activeFilter === "completed" ? "active" : ""}
          // Butona tıklandığında handleFilterClick fonksiyonunu çağır ve filtre değerini ileterek güncelleme yap
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

// Footer bileşeni dışa aktar
export default Footer;
