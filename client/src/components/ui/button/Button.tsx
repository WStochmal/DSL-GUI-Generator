import s from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "transparent" | "primary" | "secondary" | "icon";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconSize?: number;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconSize = 20,
  onClick,
}) => {
  return (
    <button
      className={`${s.btn} ${s[`btn--${type}`]} ${s[`btn--${className}`]}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {icon && (
        <img
          className={s.icon}
          src={icon}
          style={{ width: iconSize, height: iconSize }}
        ></img>
      )}
      {loading ? "Loading..." : children}
    </button>
  );
};
