// React'ten useState ve useEffect hook'larını al
import { useState, useEffect } from "react";
// Component dosyasını içe aktar
import Form from "../form";
// List klasöründen sadece TaskList bileşenini içe aktar
import { TaskList } from "../list";
// Footer bileşenini içe aktar
import Footer from "../footer";
// Resim dosyasını içe aktar
import todoPic from "./todo.png";

// MainStructure bileşeni fonksiyonu
function MainStructure() {
  // useState hook'unu kullanarak myTasks state'ini tanımla ve başlangıç değeriyle birlikte
  const [myTasks, setMyTasks] = useState([
    { task: "Saat 07:05'te uyan.", completed: true, prevCompleted: true, isHidden: true },
    { task: "Yazılım için 4 saat çalış", completed: true, prevCompleted: true, isHidden: true },
    { task: "Spor salonuna git", completed: true, prevCompleted: true, isHidden: true },
  ]);

  // Görev silme fonksiyonu
  const handleDeleteTask = (index) => {
    // myTasks state'ini güncelle ve silinecek görevi filtreleyerek al
    const updatedTasks = myTasks.filter((task, i) => i !== index);
    setMyTasks(updatedTasks);
  };

  // Görevleri filtreleme fonksiyonu
  const handleFilterTasks = (filter) => {
    // myTasks dizisinin bir kopyasını oluştur
    const tasksCopy = [...myTasks];

    // Filtrelenmiş görevleri oluştur
    const filteredTasks = tasksCopy.map((task) => {
      const filteredTask = { ...task };

      if (filter === "all") {
        filteredTask.isHidden = false;
      } else if (filter === "active") {
        filteredTask.isHidden = task.completed;
      } else if (filter === "completed") {
        filteredTask.isHidden = !task.completed;
      } else {
        filteredTask.isHidden = false;
      }

      return filteredTask;
    });

    // myTasks state'ini güncelle
    setMyTasks(filteredTasks);
  };

  // Component'in yüklenmesinden önce localStorage'den kaydedilmiş görevleri getir
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setMyTasks(JSON.parse(storedTasks));
    }
  }, []);

  // myTasks state'inde değişiklik olduğunda localStorage'e kaydet
  useEffect(() => {
    if (myTasks.some((task) => task.completed !== task.prevCompleted)) {
      localStorage.setItem("tasks", JSON.stringify(myTasks));
    }
  }, [myTasks]);

  // JSX olarak dönen bileşen
  return (
    <div id="container">
      <header id="header">
        {/* Logo resmi */}
        <img id="headerPic" src={todoPic} alt="Todo Logo" />
        {/* Başlık */}
        <span id="headerText">To Do</span>
      </header>
      <div>
        {/* Form bileşeni */}
        <Form addTasks={setMyTasks} tasks={myTasks} />
        {/* TaskList bileşeni */}
        <TaskList
          tasks={myTasks.filter((task) => !task.isHidden)}
          onDelete={handleDeleteTask}
          onFilter={handleFilterTasks}
        />
        {/* Footer bileşeni */}
        <Footer
          onFilter={handleFilterTasks}
          taskCount={myTasks.length}
          todayTasksCount={myTasks.filter((task) => !task.isHidden).length}
        />
      </div>
    </div>
  );
}

// MainStructure bileşeni dışa aktar
export default MainStructure;
