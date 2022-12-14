import React, {
  PropsWithChildren,
  FC,
  JSXElementConstructor,
  CSSProperties
} from "react";
import cn from "clsx";
import { UI } from "../../typedefs/namespace";

interface TextProps {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
}

type Variant = "h1" | "h2" | "description" | "body" | "smallText";
enum VariantEnum {
  h1 = "h1",
  h2 = "h2",
  body = "p",
  description = "p",
  smallText = "small"
}

const variants: Record<Variant, string> = {
  h1: "text-5xl font-bold tracking-tight",
  h2: "text-4xl font-semibold tracking-tight",
  description: "text-lg font-medium tracking-tight text-accents-5",
  body: "text-base font-normal",
  smallText:
    "text-sm font-semibold text-blue uppercase tracking-tight pl-1 block"
};
const Text: FC<PropsWithChildren<TextProps>> = ({
  style,
  className = "",
  variant = "body",
  children,
  html
}) => {
  const componentsMap: {
    [P in Variant]:
      | React.ComponentType<
          `${typeof VariantEnum[P]}` | UI.JSX.ReactMapped[typeof VariantEnum[P]]
        >
      | string;
  } = {
    h1: "h1",
    h2: "h2",
    body: "p",
    description: "p",
    smallText: "small"
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap[variant];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: `${html}` }
      }
    : {};

  return (
    <Component
      className={cn("font-gotham", variants[variant], className)}
      style={style}
      {...htmlContentProps}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

export default Text;
