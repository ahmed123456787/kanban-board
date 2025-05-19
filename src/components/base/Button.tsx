type CustomButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton = ({ label, onClick }: CustomButtonProps) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
