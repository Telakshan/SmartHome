import "./Button.scss";

interface ButtonProps{
  children: string;
  inverted: boolean;
  otherProps?: [x: string];
  onClick:  () => void;
}

const Button: React.FC<ButtonProps> = ({ children, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;