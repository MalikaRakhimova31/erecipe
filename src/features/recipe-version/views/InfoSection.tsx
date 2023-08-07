import StatusBox from "@/components/StatusBox/StatusBox";
import TitleDescBox from "@/components/TitleDescBox/TitleDescBox";
import { Flex } from "@chakra-ui/react";
import format from "date-fns/format";
import { useMemo } from "react";

export default function InfoSection({ recipe }: any): React.ReactElement {
  // console.log("info recipe", recipe);
  const recipeInfo = useMemo(
    // eslint-disable-next-line consistent-return
    () => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (recipe) {
        return [
          {
            title: "создан",
            description: format(
              new Date(recipe?.created_at),
              "dd/MM/yyyy (HH:mm)",
            ),
          },
          {
            title: "Действует до",
            description: format(
              new Date(recipe?.created_at),
              "dd/MM/yyyy (HH:mm)",
            ),
          },
          {
            title: "Врач",
            description: recipe?.practitioner.firstname,
          },
          {
            title: "Статус",
            description: <StatusBox status={recipe.status} />,
          },
        ];
      }
    },
    [recipe],
  );

  return (
    <Flex
      w="full"
      columnGap="16px"
      alignItems="center"
      justifyContent="space-between"
    >
      {recipeInfo?.map((el) => (
        <TitleDescBox
          title={el.title}
          description={el.description}
          key={el.title}
        />
      ))}
    </Flex>
  );
}
