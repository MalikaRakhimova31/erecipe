interface Props {
  months: string[][];
  weekDays: string[][];
  digits: string[];
  meridiems: string[][];
  name: string;
}

const locale: Props = {
  name: "ru",
  months: [
    ["Январь", "Янв"],
    ["Февраль", "Фев"],
    ["Март", "Мар"],
    ["Апрель", "Апр"],
    ["Май", "Май"],
    ["Июнь", "Июн"],
    ["Июль", "Июл"],
    ["Август", "Авг"],
    ["Сентябрь", "Сен"],
    ["Октябрь", "Окт"],
    ["Ноябрь", "Ноя"],
    ["Декабрь", "Дек"],
  ],
  weekDays: [
    ["Суббота", "Сб"],

    ["Воскресенье", "Вс"],

    ["Понеделник", "Пн"],
    ["Вторник", "Вт"],
    ["Среда", "Ср"],
    ["Четверг", "Чт"],
    ["Пятница", "Пт"],
  ],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: [
    ["ก่อนเที่ยง", "เอเอ็ม"],
    ["หลังเที่ยง", "พีเอ็ม"],
  ],
};

export default locale;