// React'ten useState ve useEffect hook'larını al
import { useState, useEffect } from "react";
// CSS dosyasını içe aktar
import "./style.css";

// Başlangıç form durumu
const initialFormState = { task: "" };

// Form bileşeni fonksiyonu
function Form({ addTasks, tasks }) {
    // useState hook'unu kullanarak form state'ini tanımla ve başlangıç durumu initialFormState olsun
    const [form, setForm] = useState(initialFormState);

    // useEffect hook'unu kullanarak, tasks prop'undaki değişiklikler olduğunda formu sıfırla
    useEffect(() => {
        setForm(initialFormState);
    }, [tasks]);

    // Input değişikliğinde çağrılacak fonksiyon
    const onChangeInput = (e) => {
        // Giriş değerindeki boşlukları kaldır
        const inputValue = e.target.value.trim();
        // form state'ini güncelle, [e.target.name] ile dinamik olarak input alanını güncelle
        setForm({ ...form, [e.target.name]: inputValue });
    };

    // Form gönderildiğinde çağrılacak fonksiyon
    const onSubmit = (e) => {
        e.preventDefault();
        // Eğer görev boşsa, işlemi sonlandır
        if (form.task === "") {
            return false;
        }
        // addTasks fonksiyonunu çağırarak yeni görevi ekleyin
        addTasks([...tasks, form]);
        // Formu sıfırla
        setForm(initialFormState);
    };

    // JSX olarak dönen bileşen
    return (
        <>
            {/* Form etiketi, onSubmit event'i ile onSubmit fonksiyonunu çağırır */}
            <form onSubmit={onSubmit}>
                {/* Input alanı ve ekle butonunu içeren bir div */}
                <div id="inputArea">
                    {/* Input alanı */}
                    <input
                        id="inputTask"
                        name="task"
                        placeholder="Take note of your tasks..."
                        value={form.task}
                        // Input değişikliğinde onChangeInput fonksiyonunu çağır
                        onChange={onChangeInput}
                    />
                    {/* Ekle butonu */}
                    <button className="btn" type="submit">Add</button>
                </div>
            </form>
        </>
    );
}

// Form bileşeni dışa aktar
export default Form;
