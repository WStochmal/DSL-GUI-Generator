import s from "./Button.module.css";

type ButtonsProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonsProps> = ({ children, onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};
