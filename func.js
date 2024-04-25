document.addEventListener("DOMContentLoaded", () => {
    const vinyl = document.getElementById("vinyl");
    let rotation = 0;

    // Встановлюємо обертання з інтервалом
    setInterval(() => {
        rotation += 1; // Кількість градусів для обертання
        vinyl.style.transform = `rotate(${rotation}deg)`; // Застосування CSS-трансформації
    }, 16); // Інтервал 16 мс забезпечує приблизно 60 кадрів на секунду
});