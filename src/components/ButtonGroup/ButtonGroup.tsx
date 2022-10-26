import { ReactNode } from "react";

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | undefined;
};

export const ButtonGroup = ({
  children,
  className,
  ...props
}: ButtonGroupProps) => {
  return (
    <div
      className={`grid gap-6 grid-flow-col justify-start ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
