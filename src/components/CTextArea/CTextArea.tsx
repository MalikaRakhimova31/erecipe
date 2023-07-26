/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Controller } from "react-hook-form";
import { type TextAreaProps } from "@/types";
import { Textarea, border } from "@chakra-ui/react";
import Label from "../Label/Label";

export default function CTextArea(props: TextAreaProps): React.ReactElement {
  const { title, control, name, placeholder, required = false, errors } = props;
  // const isError =
  //   Boolean(errors) && (Boolean(errors[name]) || errors[name.split(".")[1]]);
  return (
    <Controller
      control={control}
      rules={{ required }}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Label title={title} errors={errors}>
          <Textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size="lg"
            rows={4}
            // borderColor={isError ? "colors.errorColor" : "purple"}
            border={`1px solid ${errors ? "#FF4E4E" : "#E7EAF0"}`}
            _hover={{
              border: `1px solid ${errors ? "#FF4E4E" : "#0ABAB5"}`,
            }}
          />
        </Label>
      )}
    />
  );
}
