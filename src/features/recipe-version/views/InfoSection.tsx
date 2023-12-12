import StatusBox from "@/components/StatusBox/StatusBox";
import TitleDescBox from "@/components/TitleDescBox/TitleDescBox";
import { useHaveAccessTo } from "@/helpers/have-access-to";
import { Grid, GridItem } from "@chakra-ui/react";
import format from "date-fns/format";
import { useMemo } from "react";
import type { RecipeDetailsTypes } from "../types";

interface recipeProps {
  recipe: RecipeDetailsTypes;
}

export default function InfoSection({
  recipe,
}: recipeProps): React.ReactElement {
  const isOrganization = useHaveAccessTo("recipe-version-organization");
  const isDoctor = useHaveAccessTo("recipe-version-doctor");

  console.log("isDoctor", isDoctor);

  const recipeInfo = useMemo(
    // eslint-disable-next-line consistent-return
    () => {
      if (Boolean(recipe) && isDoctor) {
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
      if (Boolean(recipe) && isOrganization) {
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
            title: "Пациент",
            description: `${recipe?.patient?.firstname} ${recipe?.patient?.lastname}`,
          },
          {
            title: "Поликлиника",
            description: recipe.practitioner.organization.name.ru,
          },
          {
            title: "Адрес поликлиники",
            description: recipe.practitioner.organization.name.ru,
          },
          {
            title: "Статус",
            description: <StatusBox status={recipe.status} />,
          },
        ];
      }
    },
    [isDoctor, isOrganization, recipe],
  );

  console.log("recipeInfo", recipeInfo);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {recipeInfo?.map((el) => (
        <GridItem key={el.title}>
          <TitleDescBox title={el.title} description={el.description} />
        </GridItem>
      ))}
    </Grid>
  );
}
