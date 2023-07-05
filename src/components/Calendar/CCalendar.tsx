import { Calendar } from "react-multi-date-picker";
import locale from "@/helpers/locale";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "./styles.scss";
import { type InputProps } from "@/types";
import CustomNavButton from "./CustomNavButton";

export default function CCalendar({
  value,
  onChange,
}: InputProps): React.ReactElement {
  return (
    <div className="Calendar">
      <Calendar
        renderButton={(direction: string, handleClick: () => void) => (
          <CustomNavButton direction={direction} handleClick={handleClick} />
        )}
        plugins={[weekends()]}
        weekStartDayIndex={1}
        locale={locale}
        className="datePicker"
        format="DD.MM.YYYY"
        value={value}
        onChange={(val: any) => {
          if (val !== null) onChange(new Date(val));
        }}
      />
    </div>
  );
}
