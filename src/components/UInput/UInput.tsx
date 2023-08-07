import styles from "./styles.module.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
  type: string;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
}
export default function UInput({
  onChange,
  icon,
  placeholder,
  inputRef,
  type = "number",
  disabled = false,
}: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <img src={icon} alt="input icon" />
      <input
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        disabled={disabled}
      />
    </div>
  );
}
