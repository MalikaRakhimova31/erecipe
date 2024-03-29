import CButton from "@/components/button/button";

function ExcelIcon(): React.ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6719 6.58613V22.4299C20.6719 23.283 19.9828 23.9721 19.1297 23.9721H4.87031C4.01719 23.9721 3.32812 23.283 3.32812 22.4299V1.57051C3.32812 0.717383 4.01719 0.0283203 4.87031 0.0283203H14.1141L20.6719 6.58613Z"
        fill="#23A566"
      />
      <path
        d="M15.7921 11.9482H8.20776C7.93589 11.9482 7.71558 12.1686 7.71558 12.4404V19.0451C7.71558 19.317 7.93589 19.5373 8.20776 19.5373H15.7968C16.0687 19.5373 16.289 19.317 16.289 19.0451V12.4451C16.2843 12.1732 16.064 11.9482 15.7921 11.9482ZM8.69995 15.117H11.5078V16.3686H8.69995V15.117ZM12.4921 15.117H15.2999V16.3686H12.4921V15.117ZM15.2999 14.1326H12.4921V12.9373H15.2999V14.1326ZM11.5078 12.9373V14.1326H8.69995V12.9373H11.5078ZM8.69995 17.3576H11.5078V18.5529H8.69995V17.3576ZM12.4921 18.5529V17.3576H15.2999V18.5529H12.4921Z"
        fill="white"
      />
      <path
        opacity="0.19"
        d="M14.9954 6.34687L20.6719 10.9453V6.62812L17.4516 4.75781L14.9954 6.34687Z"
        fill="black"
      />
      <path
        d="M20.6718 6.58613H15.6562C14.8031 6.58613 14.114 5.89707 14.114 5.04395V0.0283203L20.6718 6.58613Z"
        fill="#8ED1B1"
      />
    </svg>
  );
}

interface Props {
  onClick: () => void;
  loading: boolean;
}

export default function ExcelBtn({
  onClick,
  loading,
}: Props): React.ReactElement {
  return (
    <CButton
      buttonType="button"
      variant="greenText"
      icon={<ExcelIcon />}
      text="Экспорт в Excel"
      height="48"
      onClick={onClick}
      isLoading={loading}
    />
  );
}
