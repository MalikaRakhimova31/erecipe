import { type StatusProps } from "@/types";

const today = new Date();

interface Props extends StatusProps {
  id: string;
  created: Date;
  expire: string;
  version: string;
}

const historyData: Props[] = [
  {
    id: "ER123456",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "issuedByDoctor",
  },
  {
    id: "ER123450",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "issuedByDoctor",
  },
  {
    id: "ER123453",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "declined",
  },
  {
    id: "ER123453",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "declined",
  },
  {
    id: "ER123453",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "declined",
  },
  {
    id: "ER123454",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "expired",
  },
  {
    id: "ER123454",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "expired",
  },
  {
    id: "ER123454",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "expired",
  },
  {
    id: "ER123434",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "issued",
  },
  {
    id: "ER123434",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "issued",
  },
  {
    id: "ER123434",
    created: today,
    expire: "30 дней",
    version: "2 версии",
    status: "issued",
  },
];

export default historyData;
