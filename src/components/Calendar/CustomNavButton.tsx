interface Props {
  direction: string;
  handleClick: () => void;
}

export default function CustomNavButton({
  direction,
  handleClick,
}: Props): React.ReactElement {
  return (
    <button
      type="button"
      className="w-5 h-5 bg-transparent"
      onClick={handleClick}
    >
      {direction === "right" ? (
        <img src="/assets/arrowRight.svg" alt="arrow right" />
      ) : (
        <img src="/assets/arrowLeft.svg" alt="arrow right" />
      )}
    </button>
  );
}
