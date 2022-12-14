import type { AnchorHTMLAttributes, FC } from "react";
import NextLink, { type LinkProps } from "next/link.js";
import cn from "clsx";

const Link: FC<
  Exclude<LinkProps, "passHref"> & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ href, prefetch, children, className, ...props }) => (
  <NextLink href={href} prefetch={prefetch}>
    <a
      className={cn(
        "text-link hover:text-link-light no-underline transition-colors",
        // CSS for <code/>
        "[&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors",
        className
      )}
      {...props}>
      {children}
    </a>
  </NextLink>
);

export default Link;
