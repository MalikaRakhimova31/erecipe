import { Flex } from "@chakra-ui/react";
import cn from "classnames";

import styles from "./Styles.module.scss";
import statuses from "../mock/statuses";

interface StatusProps {
  status:
    | "issuedByDoctor"
    | "issuedByPharmacy"
    | "issued"
    | "declined"
    | "expired"
    | "new"
    | "notIssued";
}

export default function StatusBox({ status }: StatusProps): React.ReactElement {
  const classNames = cn(
    status === statuses.issuedByDoctor && styles.issuedByDoctor,
    status === statuses.issued ||
      (status === statuses.issuedByPharmacy && styles.issued),
    status === statuses.declined && styles.declined,
    status === statuses.expired && styles.expired,
    status === statuses.new && styles.issued,
    status === statuses.done && styles.issuedByDoctor,
    status === statuses.notIssued && styles.expired,
  );

  const generateTitle = (): string => {
    let str = "";
    switch (status) {
      case statuses.issuedByDoctor: {
        str = "выписан врачом";
        break;
      }
      case statuses.issued: {
        str = "выдан";
        break;
      }
      case statuses.new: {
        str = "Новый";
        break;
      }
      case statuses.issuedByPharmacy: {
        str = "Выдан аптекой";
        break;
      }
      case statuses.declined: {
        str = "отменен";
        break;
      }
      case statuses.expired: {
        str = "истек";
        break;
      }
      case statuses.done: {
        str = "Готова";
        break;
      }
      case statuses.notIssued: {
        str = "Невыдан";
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
