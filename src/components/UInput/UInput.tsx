import styles from "./styles.module.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
export default function UInput({
  onChange,
  icon,
  placeholder,
  inputRef,
}: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <img src={icon} alt="input icon" />
      <input
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  );
}
