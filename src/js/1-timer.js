import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;
let startBtn = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate) {
      if (selectedDate < new Date()) {
        window.alert('Please choose a date in the future');
        console.log('Обрана дата в минулому');
        startBtn.disabled = true;
      } else {
        console.log('Обрана дата в майбутньому');
        startBtn.disabled = false;
      }
      userSelectedDate = selectedDate;
    }
  },
  onValueUpdate(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      startBtn.disabled = true; // Вимикаємо кнопку, якщо вибрана дата в минулому
    } else {
      startBtn.disabled = false; // Увімкнемо кнопку, якщо вибрана дата в майбутньому
    }
  },
};

const timer = new flatpickr('#datetime-picker', options);
