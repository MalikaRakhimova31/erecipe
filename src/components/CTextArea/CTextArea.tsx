import { Controller } from "react-hook-form";
import { type TextAreaProps } from "@/types";
import { Textarea } from "@chakra-ui/react";
import Label from "../Label/Label";

export default function CTextArea(props: TextAreaProps): React.ReactElement {
  const { title, control, name, placeholder } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Label title={title}>
          <Textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size="lg"
          />
        </Label>
      )}
    />
  );
}
