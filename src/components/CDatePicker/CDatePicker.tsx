import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { getYear, getMonth } from "date-fns";
import "./datepicker.scss";
import { Box } from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import Label from "../Label/Label";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

registerLocale("ru", ru);

interface DatePickerProps {
  name: string;
  control: any;
  title: string;
}

export default function CDatePicker({
  name,
  control,
  title,
}: DatePickerProps): React.ReactElement {
  const range = (startDate: number, currentYear: number): number[] => {
    const years = [];
    for (let i = startDate; i <= currentYear; i += 1) {
      years.push(i);
    }
    return years;
  };
  const years = range(1990, getYear(new Date()));
  console.log("years", range(1990, getYear(new Date())));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Box position="relative">
          <Label title={title}>
            <DatePicker
              locale="ru"
              wrapperClassName="datepicker"
              placeholderText="ДД/ММ/ГГ"
              showIcon
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
              selected={value}
              onChange={onChange}
            />
          </Label>
        </Box>
      )}
    />
  );
}
