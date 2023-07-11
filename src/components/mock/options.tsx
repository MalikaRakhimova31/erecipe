import { type SelectionMenuProps } from "@/types";

const statusOptions: SelectionMenuProps[] = [
  { value: "all", label: "Все статусы" },
  { value: "issuedByDoctor", label: "Выписан врачом" },
  { value: "issuedByDoctor", label: "Выписан врачом" },
  { value: "issuedByPharmacy", label: "Выдан аптекой" },
  { value: "expired", label: "Истек" },
];

export default statusOptions;
