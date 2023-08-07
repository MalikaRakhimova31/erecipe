/* eslint-disable @typescript-eslint/restrict-template-expressions */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function generatePatientInfo(patientInfo: any) {
  if (Boolean(patientInfo) && Object.keys(patientInfo)?.length !== 0) {
    return {
      src: "/assets/users/user.svg",
      name: `${patientInfo.lastname} ${patientInfo.middlename}`,
      birthdate: `${patientInfo.birth_date}`,
      tableData: [
        {
          title: "ПИНФЛ",
          value: `${patientInfo.nnuzb}`,
        },
        {
          title: "Пол",
          value: `${patientInfo.gender === "male" ? "Мужчина" : "Женшина"}`,
        },
        // {
        //   title: "Рост",
        //   value: "178 см",
        // },
        // {
        //   title: "Вес",
        //   value: "75 кг",
        // },
        // {
        //   title: "Аллергия",
        //   value: "Нет известных аллергий",
        // },
      ],
    };
  }
  return null;
}
