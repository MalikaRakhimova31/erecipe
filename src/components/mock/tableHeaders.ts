/* eslint-disable import/prefer-default-export */
const healthMinistryDashTH = [
  "Название",
  "Адрес",
  "выдано",
  "Выписано",
  "Истекло",
];

const ministryDoctorsTH = [
  "ФИО врача",
  "место работы",
  "специализация",
  "Номер телефона",
];
const mainDoctorsTH = [
  "ФИО врача",
  "специализация",
  "выдано рецептов",
  "Номер телефона",
];

const healthPatientsTH = ["ФИО пациента", "Действия"];
const mainDoctorPatientsTH = ["ФИО пациента", "последний визит", "Действия"];
const ministryRecipeHistoryTH = [
  "ID рецепта",
  "создан",
  "Действует",
  "кол-во версий",
  "Статус",
];
const doctorRecipeHistoryTH = [
  "ID рецепта",
  "создан",
  "Действует",
  "кол-во версий",
  "Статус",
  "Действия",
];

const pharmacyRecipeTH = [
  "ID рецепта",
  "создан",
  "ПИНФЛ",
  "Пациент",
  "Статус",
  "Действия",
];

const erecipeMinistryTH = [
  "ID рецепта",
  "создан",
  "Действует",
  "кол-во версий",
  "Пациент",
  "Врач",
  "Статус",
];

const mainDoctorsListTH = [
  "ФИО врача",
  "выдано рецептов",
  "Выписано назначений",
];

const patientIndicatorsTH = ["ФИО пациента", "последний визит", "Действия"];
export {
  healthMinistryDashTH,
  ministryDoctorsTH,
  mainDoctorsTH,
  healthPatientsTH,
  ministryRecipeHistoryTH,
  erecipeMinistryTH,
  patientIndicatorsTH,
  doctorRecipeHistoryTH,
  mainDoctorPatientsTH,
  mainDoctorsListTH,
  pharmacyRecipeTH,
};
