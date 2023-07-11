import JoinedTable from "@/components/JoinedTable/JoinedTable";
import UserInfoBox from "@/components/UserInfoBox/UserInfoBox";
import { Box } from "@chakra-ui/react";

const userData = [
  {
    src: <UserInfoBox src="/assets/users/user2.png" name="Ахрор Саидов" />,
    name: "Феруза Алимова",
    lastInvite: "date",
    userId: "+998 90 832 32 12",
  },
  {
    src: <UserInfoBox src="/assets/users/user3.png" name="Ахрор Саидов" />,
    name: "Феруза Алимова",
    lastInvite: "date",
    userId: "+998 90 832 32 12",
  },
];

export default function DoctorsTable(): React.ReactElement {
  const header = [
    "ФИО врача",
    "специализация",
    "выдано рецептов",
    "Номер телефона",
  ];
  return (
    <Box
      bg="white"
      borderRadius="8px"
      border="1px solid #E7EAF0"
      px={5}
      minH="82vh"
    >
      <JoinedTable headData={header} bodyData={userData} />
    </Box>
  );
}
