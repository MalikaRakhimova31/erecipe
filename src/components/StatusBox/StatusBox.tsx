import { Flex } from "@chakra-ui/react";
import cn from "classnames";
import { type StatusProps } from "@/types";
import styles from "./Styles.module.scss";
import statuses from "../mock/statuses";

export default function StatusBox({ status }: StatusProps): React.ReactElement {
  const classNames = cn(
    status === statuses.issuedByDoctor && styles.issuedByDoctor,
    status === statuses.issued ||
      (status === statuses.issuedByPharmacy && styles.issued),
    status === statuses.declined && styles.declined,
    status === statuses.expired && styles.expired,
    status === statuses.new && styles.issued,
    status === statuses.done && styles.issuedByDoctor,
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
