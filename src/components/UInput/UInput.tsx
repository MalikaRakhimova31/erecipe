/* eslint-disable react/require-default-props */
import styles from "./styles.module.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  placeholder: string;
  value: string | undefined;
  type?: string;
  disabled?: boolean;
}
export default function UInput({
  onChange,
  icon,
  placeholder,
  value,
  type = "string",
  disabled = false,
}: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <img src={icon} alt="input icon" />
      <input
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
      />
    </div>
  );
}
