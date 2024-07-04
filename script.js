function updateUTCTime() {
    const now = new Date();
    const utcTimeElement = document.getElementById('utc-time');
    utcTimeElement.textContent = now.toUTCString();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayElement = document.getElementById('current-day');
    currentDayElement.textContent = days[now.getUTCDay()];
}

updateUTCTime();