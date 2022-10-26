import { forwardRef, ReactNode } from "react";

type ButtonColors = "primary" | "secondary" | "transparent";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | undefined;
  /**
   * - primary = orange
   * - secondary = dark navy
   * - transparent = primary outline
   */
  color: ButtonColors;
};

/**
 * Tailwind CSS does not support dynamic classes, ie:
 * `${bg-${color}`, so instead we can create a record
 * of classNames manually
 */
const ButtonVariants: Record<ButtonColors, string> = {
  primary:
    "outline-0 bg-primary border-primary text-white hover:bg-primaryDark focus:shadow-button",
  secondary:
    "outline-0 bg-secondary border-secondary text-white hover:bg-secondaryDark focus:shadow-buttonSecondary",
  transparent:
    "outline-0 bg-transparent border-primary text-primary focus:shadow-button",
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
