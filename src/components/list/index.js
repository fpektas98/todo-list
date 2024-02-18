// React kütüphanesini içe aktar
import React from "react";
// CSS dosyasını içe aktar
import "./style.css";

// TaskList bileşeni fonksiyonu
function TaskList({ tasks, onDelete }) {
  // Silme işlemi için kullanılacak fonksiyon
  const handleDelete = (index) => {
    // onDelete prop'undaki fonksiyonu çağır ve silinecek görevin index'ini ileterek ana bileşeni güncelle
    onDelete(index);
  };

  // JSX olarak dönen bileşen
  return (
    <ul>
      {/* tasks dizisini map fonksiyonu ile döngüye al ve her bir görev için bir liste öğesi oluştur */}
      {tasks.map((task, index) => (
        <li key={index} className="li-container">
          {/* Checkbox */}
          <input type="checkbox" id={`checkbox-${index}`} className="rounded-checkbox" />
          {/* Checkbox'a ait etiket */}
          <label htmlFor={`checkbox-${index}`} className="checkbox-label">
            {/* Görevin adı */}
            {task.task}
          </label>
          {/* Sil butonu */}
          <button className="delete-icon" onClick={() => handleDelete(index)} type="button">
            &#10006;
          </button>
        </li>
      ))}
    </ul>
  );
}

// TaskItem bileşeni fonksiyonu
function TaskItem({ task }) {
  // JSX olarak dönen bileşen
  return (
    <div>
      <ul id="">
        {/* Görev adını içeren liste öğesi */}
        <li>{task.task}</li>
      </ul>
    </div>
  );
}

// TaskList ve TaskItem bileşenlerini dışa aktar
export { TaskList, TaskItem };
