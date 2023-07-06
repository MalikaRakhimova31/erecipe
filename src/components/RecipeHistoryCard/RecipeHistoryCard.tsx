import { Td, Tr } from "@chakra-ui/react";
import format from "date-fns/format";
import { type StatusProps } from "@/types";
import { Link } from "react-router-dom";
import CIconButton from "../CIconButton/CIconButton";
import StatusBox from "../StatusBox/StatusBox";

interface Props extends StatusProps {
  id: string;
  created: Date;
  expire: string;
  version: string;
}

export default function RecipeHistoryCard({
  id,
  created,
  expire,
  version,
  status,
}: Props): React.ReactElement {
  return (
    <Tr border="none" px="20px" py={4} bg="white">
      <Td
        borderTopLeftRadius="8px"
        borderBottomLeftRadius="8px"
        border="none"
        paddingLeft="20px"
      >
        {id}
      </Td>
      <Td border="none" fontWeight={400}>
        {format(created, "dd/MM/yyyy (HH:mm)")}
      </Td>
      <Td border="none" fontWeight={400}>
        {expire}
      </Td>
      <Td border="none" fontWeight={400}>
        {version}
      </Td>
      <Td border="none" fontWeight={400} pr="20px" maxW="138px">
        <StatusBox status={status} />
      </Td>
      <Td
        borderTopRightRadius="8px"
        borderBottomRightRadius="8px"
        border="none"
        paddingRight="20px"
      >
        <Link to={`/patients/recipe-version/${id}`}>
          <CIconButton icon={<EditPencil />} />
        </Link>
      </Td>
    </Tr>
  );
}

function EditPencil(): React.ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33333 18.3335H16.6667"
        stroke="#0ABAB5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.5734 3.05228L12.1913 2.43436C13.2151 1.41055 14.875 1.41055 15.8988 2.43436C16.9226 3.45816 16.9226 5.11807 15.8988 6.14187L15.2809 6.75979M11.5734 3.05228C11.5734 3.05228 11.6506 4.36535 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979M11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346M15.2809 6.75979L9.60006 12.4406C9.21529 12.8254 9.0229 13.0178 8.81077 13.1832C8.56054 13.3784 8.28979 13.5457 8.00331 13.6823C7.76046 13.798 7.50234 13.8841 6.98611 14.0561L4.79861 14.7853M4.79861 14.7853L4.26389 14.9635C4.00985 15.0482 3.72977 14.9821 3.54042 14.7927C3.35106 14.6034 3.28495 14.3233 3.36963 14.0693L3.54787 13.5346M4.79861 14.7853L3.54787 13.5346"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
      <path
        d="M12.8092 5.52395C11.6506 4.36535 11.5734 3.05228 11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346L4.79861 14.7853L6.98611 14.0561C7.50234 13.8841 7.76046 13.798 8.00331 13.6823C8.28979 13.5457 8.56054 13.3784 8.81077 13.1832C9.0229 13.0178 9.21529 12.8254 9.60006 12.4406L15.2809 6.75979C15.2809 6.75979 13.9678 6.68255 12.8092 5.52395Z"
        fill="#EBFAF9"
      />
      <path
        d="M12.1913 2.43436L11.5734 3.05228C11.5734 3.05228 11.6506 4.36535 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979L15.8988 6.14187C16.9226 5.11807 16.9226 3.45816 15.8988 2.43436C14.875 1.41055 13.2151 1.41055 12.1913 2.43436Z"
        fill="#EBFAF9"
      />
      <path
        d="M11.5734 3.05228L12.1913 2.43436C13.2151 1.41055 14.875 1.41055 15.8988 2.43436C16.9226 3.45816 16.9226 5.11807 15.8988 6.14187L15.2809 6.75979M11.5734 3.05228C11.5734 3.05228 11.6506 4.36535 12.8092 5.52395C13.9678 6.68255 15.2809 6.75979 15.2809 6.75979M11.5734 3.05228L5.89254 8.7331C5.50777 9.11788 5.31538 9.31027 5.14993 9.52239C4.95475 9.77263 4.78742 10.0434 4.65089 10.3299C4.53515 10.5727 4.44911 10.8308 4.27704 11.3471L3.54787 13.5346M15.2809 6.75979L9.60006 12.4406C9.21529 12.8254 9.0229 13.0178 8.81077 13.1832C8.56054 13.3784 8.28979 13.5457 8.00331 13.6823C7.76046 13.798 7.50234 13.8841 6.98611 14.0561L4.79861 14.7853M4.79861 14.7853L4.26389 14.9635C4.00985 15.0482 3.72977 14.9821 3.54042 14.7927C3.35106 14.6034 3.28495 14.3233 3.36963 14.0693L3.54787 13.5346M4.79861 14.7853L3.54787 13.5346"
        stroke="#0ABAB5"
        strokeWidth="1.5"
      />
    </svg>
  );
}