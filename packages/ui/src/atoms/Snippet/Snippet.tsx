import { FC, HTMLAttributes, useMemo } from "react";
import cn from "clsx";
import UI from "../../typedefs/namespace";
import { highlight } from "sugar-high";

const Snippet: FC<UI.JSX.ReactMapped["pre"]> = ({
  children,
  className,
  dangerouslySetInnerHTML,
  ...props
}) => {
  const __html = useMemo(
    () =>
      dangerouslySetInnerHTML?.__html
        ? highlight(dangerouslySetInnerHTML?.__html)
        : children
        ? highlight(children.toString()!)
        : "",
    [children, dangerouslySetInnerHTML]
  );
  return (
    <pre
      className={cn(
        "border-accents-2 bg-accents-1 font-gotham overflow-x-auto rounded-md border p-6",
        className
      )}
      {...props}>
      <code dangerouslySetInnerHTML={{ __html: __html }} />
    </pre>
  );
};

Snippet.displayName = "Snippet";

export default Snippet;
