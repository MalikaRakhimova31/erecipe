import StatusBox from "@/components/StatusBox/StatusBox";
import format from "date-fns/format";
import OtpButton from "./OtpButton";

const today = new Date();

// eslint-disable-next-line import/prefer-default-export
export const header = [
  "ID рецепта",
  "создан",
  "Действует",
  "кол-во версий",
  "Врач",
  "Статус",
];

export const pharmacyHeader = [
  "ID рецепта",
  "создан",
  "Действует",
  "кол-во версий",
  "Пациент",
  "Статус",
  "Действия",
];

export const userData = [
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="issuedByDoctor" />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="issuedByDoctor" />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="expired" />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="declined" />,
  },
];

export const pharmacyBody = [
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="issuedByDoctor" />,
    action: <OtpButton />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="issuedByDoctor" />,
    action: <OtpButton />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="expired" />,
    action: <OtpButton />,
  },
  {
    id: "ER123456",
    date: format(today, "dd/MM/yyyy (HH:mm)"),
    expire: "30 дней",
    quantity: "2 версии",
    doctor: "Зилола Алимова",
    status: <StatusBox status="declined" />,
    action: <OtpButton />,
  },
];
