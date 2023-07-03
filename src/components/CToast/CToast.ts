import { useToast } from "@chakra-ui/react";

interface props {
  title: string;
  description: string;
  status: "info" | "warning" | "success" | "error";
  component: React.ReactNode;
}

function useCToast({ title, description, status, component }: props): any {
  const toast = useToast();

  const cToast = toast({
    title,
    description,
    status,
    duration: 3000,
    isClosable: true,
    position: "top",
    render: () => component,
  });

  return cToast;
}

export default useCToast;
