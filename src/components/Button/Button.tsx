import { forwardRef, ReactNode } from "react";

type ButtonColors = "primary" | "secondary" | "transparent";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | undefined;
  color: ButtonColors;
};

/**
 * Tailwind CSS does not support dynamic classes, ie:
 * `${bg-${color}`, so instead we can create a record
 * of classNames manually
 */
const ButtonVariants: Record<ButtonColors, string> = {
  primary: "bg-primary border-primary text-white hover:bg-primaryDark",
  secondary: "bg-secondary border-secondary text-white hover:bg-secondaryDark",
  transparent: "bg-transparent border-primary text-primary",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, ...props }, ref) => {
    return (
      <button
        className={`${ButtonVariants[color]} rounded-md px-6 py-2 border-2`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
