// Clock and Date
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString('ru-RU');
    document.getElementById('date').textContent = now.toLocaleDateString('ru-RU');
}
setInterval(updateClock, 1000);
updateClock();

// Weather (simulated)
const weatherConditions = ['☀️ +25°C', '⛅ +22°C', '🌧️ +18°C', '⛈️ +20°C', '🌤️ +24°C'];
document.getElementById('weather').textContent = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

// Bitcoin Price
async function fetchBitcoin() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        document.getElementById('bitcoin').textContent = '$' + parseFloat(data.bpi.USD.rate_float).toLocaleString();
    } catch {
        document.getElementById('bitcoin').textContent = '$67,420';
    }
}
fetchBitcoin();
setInterval(fetchBitcoin, 60000);

// Ethereum Price
async function fetchEthereum() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets/ethereum');
        const data = await response.json();
        document.getElementById('ethereum').textContent = '$' + parseFloat(data.data.priceUsd).toFixed(2);
    } catch {
        document.getElementById('ethereum').textContent = '$3,520';
    }
}
fetchEthereum();

// Visitors Counter (simulated)
let visitors = Math.floor(Math.random() * 5000) + 1000;
document.getElementById('visitors').textContent = visitors.toLocaleString();
setInterval(() => {
    visitors += Math.floor(Math.random() * 10);
    document.getElementById('visitors').textContent = visitors.toLocaleString();
}, 5000);

// Online Users (simulated)
setInterval(() => {
    const online = Math.floor(Math.random() * 500) + 50;
    document.getElementById('online').textContent = online;
}, 3000);

// News Ticker
const news = ['🚀 Новый дизайн запущен!', '💰 Bitcoin растёт!', '🎉 1000 посетителей!', '🌟 Обновление виджетов', '📱 Мобильная версия готова'];
let newsIndex = 0;
setInterval(() => {
    document.getElementById('news-ticker').textContent = news[newsIndex];
    newsIndex = (newsIndex + 1) % news.length;
}, 3000);
document.getElementById('news-ticker').textContent = news[0];

// Random Quote
const quotes = [
    '"Красота в простоте"',
    '"Инновации отличают лидера от последователя"',
    '"Дизайн — это не то, как предмет выглядит, а то, как он работает"',
    '"Будущее принадлежит тем, кто верит в красоту своей мечты"'
];
document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Random Number
setInterval(() => {
    document.getElementById('random').textContent = Math.floor(Math.random() * 1000);
}, 2000);

// Moon Phase (simulated)
const moonPhases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
document.getElementById('moon').textContent = moonPhases[Math.floor(Math.random() * moonPhases.length)];

// Internet Speed (simulated)
setInterval(() => {
    const speed = (Math.random() * 100 + 50).toFixed(1);
    document.getElementById('speed').textContent = speed + ' Mbps';
}, 4000);

// Particles Animation
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 10 + 10}s infinite linear;
    `;
    particlesContainer.appendChild(particle);
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        50% { transform: translateY(-100px) translateX(50px); }
    }
`;
document.head.appendChild(style);

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Map
const map = L.map('map').setView([55.7558, 37.6173], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
L.marker([55.7558, 37.6173]).addTo(map).bindPopup('Москва').openPopup();

// Mobile Menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Scroll to Content
function scrollToContent() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}
