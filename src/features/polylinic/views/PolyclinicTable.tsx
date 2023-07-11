import JoinedTable from "@/components/JoinedTable/JoinedTable";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { Box } from "@chakra-ui/react";

export default function PolyclinicTable(): React.ReactElement {
  const headData = ["Название", "Адрес", "Номер телефона", "Главный врач"];
  const bodyData = [
    {
      name: (
        <UserInfoBox
          src="/assets/users/user1.png"
          name="Семейная поликлиника №2 Мирабадского района"
        />
      ),
      address:
        "100080, Узбекистан, Город: Ташкент, Район: Мирабадский, м-в Куйлюк-3, 29А",
      phone: "+998 90 213 43 12",
      doctor: "Рахматулла Абдурахмонов",
    },
  ];
  return (
    <Box
      bg="white"
      borderRadius="8px"
      border="1px solid #E7EAF0"
      px={5}
      minH="82vh"
    >
      <JoinedTable headData={headData} bodyData={bodyData} />
    </Box>
  );
}
