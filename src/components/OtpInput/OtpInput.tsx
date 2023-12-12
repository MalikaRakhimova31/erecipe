import VerificationInput from "react-verification-input";
import { Controller } from "react-hook-form";
import styles from "./OtpInput.module.scss";

interface Props {
  control: any;
  name: string;
}

export default function OtpInput({ name, control }: Props): React.ReactElement {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref } }) => (
        <VerificationInput
          ref={ref}
          // removeDefaultStyles
          // autoFocus={true}
          placeholder="_"
          // type="number"
          validChars="0-9"
          length={6}
          inputProps={{ inputMode: "numeric" }}
          onChange={onChange}
          value={value}
          classNames={{
            container: `${styles.container}`,
            character: `${styles.character}`,
            characterInactive: `${styles.characterInactive}`,
            characterSelected: `${styles.characterSelected}`,
          }}
        />
      )}
    />
  );
}
