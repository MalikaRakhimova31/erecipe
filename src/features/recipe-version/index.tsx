import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import InfoSection from "./views/InfoSection";
import Versions from "./views/Versions";
import { UseGetRecipeItem } from "./api";

export default function RecipeVersion(): React.ReactElement {
  const { id: recipeId } = useParams();

  const { data: recipeItem } = UseGetRecipeItem({
    queryParams: {},
    id: recipeId,
    open: !(recipeId == null),
  });

  return (
    <Box padding="16px">
      <InfoSection recipe={recipeItem} />
      <Versions recipe={recipeItem} />
    </Box>
  );
}
