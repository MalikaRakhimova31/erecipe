import { type SelectionMenuProps } from "@/types";

const statusSelectionOption: SelectionMenuProps[] = [
  { value: "new", label: "Выписан врачом" },
  { value: "done", label: "Выдан аптекой" },
  { value: "expired", label: "Истек" },
];

export default statusSelectionOption;
