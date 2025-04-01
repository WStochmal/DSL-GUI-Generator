import s from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "transparent" | "primary" | "secondary" | "icon";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  className = "",
  disabled = false,
  loading = false,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${s.btn} ${s[`btn--${type}`]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {loading ? "Loading..." : children}
    </button>
  );
};
