import CButton from "@/components/button/button";
import { useState } from "react";
import OtpPopup from "./OtpPopup";

export default function OtpButton(): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <CButton
        variant="solid"
        text="Отправить код"
        buttonType="button"
        height="43"
        onClick={() => {
          setOpen(true);
        }}
      />
      <OtpPopup
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
