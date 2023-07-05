import { Flex } from "@chakra-ui/react";
import cn from "classnames";
import { type StatusProps } from "@/types";
import styles from "./Styles.module.scss";

export default function StatusBox({ status }: StatusProps): React.ReactElement {
  const classNames = cn(
    status === "issuedByDoctor" && styles.issuedByDoctor,
    status === "issued" && styles.issued,
    status === "declined" && styles.declined,
    status === "expired" && styles.expired,
    status === "new" && styles.new,
  );

  const generateTitle = (): string => {
    let str = "";
    switch (status) {
      case "issuedByDoctor": {
        str = "выписан врачом";
        break;
      }
      case "issued": {
        str = "выдан";
        break;
      }
      case "declined": {
        str = "отменен";
        break;
      }
      case "expired": {
        str = "истек";
        break;
      }
      default:
        str = "";
    }
    return str;
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      borderRadius="4px"
      pt="6px"
      pb="8px"
      px="12px"
      width="max-content"
      className={classNames}
      textTransform="lowercase"
    >
      {generateTitle()}
    </Flex>
  );
}
