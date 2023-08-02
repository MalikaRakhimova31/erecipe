import StatusBox from "@/components/StatusBox/StatusBox";
import TitleDescBox from "@/components/TitleDescBox/TitleDescBox";
import { Flex } from "@chakra-ui/react";
import format from "date-fns/format";

const today = new Date();
const info = [
  {
    title: "создан",
    description: format(today, "dd/MM/yyyy (HH:mm)"),
  },
  {
    title: "Действует до",
    description: format(today, "dd/MM/yyyy (HH:mm)"),
  },
  {
    title: "Врач",
    description: "Феруза Алимова",
  },
  {
    title: "Статус",
    description: <StatusBox status="issuedByDoctor" />,
  },
];

export default function InfoSection(): React.ReactElement {
  return (
    <Flex
      w="full"
      columnGap="16px"
      alignItems="center"
      justifyContent="space-between"
    >
      {info.map((el) => (
        <TitleDescBox
          title={el.title}
          description={el.description}
          key={el.title}
        />
      ))}
    </Flex>
  );
}
