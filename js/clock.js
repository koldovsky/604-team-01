function updateClock() {
const clockContainer = document.querySelector('.clock');
clockContainer.innerHTML = '<b>' + new Date().toLocaleTimeString('uk') + '</b>';
}

setInterval(updateClock, 1000);