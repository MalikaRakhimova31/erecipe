import { Box } from "@chakra-ui/react";
import InfoSection from "./views/InfoSection";
import Versions from "./views/Versions";

export default function RecipeVersion(): React.ReactElement {
  return (
    <Box padding="16px">
      <InfoSection />
      <Versions />
    </Box>
  );
}
