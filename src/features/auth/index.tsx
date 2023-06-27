import redirectToSSO from "@/helpers/login";
import { Button } from "@chakra-ui/react";

export default function Auth(): React.ReactElement {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Button type="button" onClick={redirectToSSO}>
      Auth
    </Button>
  );
}
