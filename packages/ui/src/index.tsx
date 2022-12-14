import type { FC, ReactNode, HTMLAttributes } from "react";
import cn from "clsx";
import type { AppProps } from "next/app";

export const Noop: FC<{ children?: ReactNode }> = ({ children }) => (
  <>{children}</>
);

export const Page: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <main
    {...props}
    className={cn("font-gotham mx-auto w-full max-w-3xl py-16", className)}>
    {children}
  </main>
);

/**
 * @type `UIAppProps`
 * @description
 * Accepts Generic Args which are inherited by the `pageProps` field of the `AppProps` Base Entity
 *
 *
 */
export type UIAppProps<P = {}> = AppProps<P> & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export { default as GenericButton } from "./atoms/Buttons";
export { default as Inspector } from "./atoms/Inspector";
export { default as Code } from "./atoms/Code";
export { default as LoadingDots } from "./atoms/LoadingDots";
export { default as NextLink } from "./atoms/NextLink";
export { default as Snippet } from "./atoms/Snippet";
export { default as Text } from "./atoms/Text";
export { default as Facebook } from "./icons/Social/Facebook";
export { default as Instagram } from "./icons/Social/Instagram";
export { default as LinkedIn } from "./icons/Social/LinkedIn";
export { default as Twitter } from "./icons/Social/Twitter";
export { default as mapParams } from "./lib/map-params";
export {
  DateTimeHelper,
  MergeRefs,
  toJson,
  toSlug,
  useIsomorphicLayoutEffect
} from "./utils/index";
export { default as UI } from "./typedefs/namespace";
export { default as TkEnums } from "./typedefs/enum";
