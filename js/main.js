document.getElementById('year').textContent = new Date().getFullYear();
const track = document.getElementById('revTrack');
const slides = [...track.children]; let i = 0; function go(n) { i = (n + slides.length) % slides.length; track.style.transform = `translateX(-${i * 100}%)` }
document.getElementById('prev').onclick = () => go(i - 1); document.getElementById('next').onclick = () => go(i + 1);
setInterval(() => go(i + 1), 6000);
