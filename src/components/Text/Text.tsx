import { ReactNode } from "react";

type TextProps = {
  children: ReactNode | undefined;
  variant?: "paragraph" | "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle";
};

export const Text = ({ children, variant }: TextProps) => {
  switch (variant) {
    case "h1":
      return <h1 className="text-h1 mb-4">{children}</h1>;

    case "h2":
      return <h2 className="text-h2 mb-4">{children}</h2>;

    case "h3":
      return <h3 className="text-h3 mb-4">{children}</h3>;

    case "h4":
      return <h4 className="text-h4 mb-4">{children}</h4>;

    case "h5":
      return <h5 className="text-h5 mb-4">{children}</h5>;

    case "subtitle":
      return <h6 className="text-subtitle text-tertiary mb-4">{children}</h6>;

    default:
      return <p className="text-paragraph mb-4">{children}</p>;
  }
};
