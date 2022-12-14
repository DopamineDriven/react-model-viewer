import type { FC } from "react";
import { UI } from "../../typedefs/namespace";

/**
 * @const loading
 * @returns
 * @keyframes blink {
    0% {
        opacity: 0.2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
}
.animate-\[blink_1s_ease_0s_infinite_normal_both\] {
    animation: blink 1s ease 0s infinite normal both;
}
 */

const loading = "animate-[blink_1s_ease_0s_infinite_normal_both]";

const dot = `rounded-full h-2 w-2 mx-0.5 bg-current ${loading}`;

const LoadingDots: FC<UI.JSX.AttributeElementMap["span"]> = ({ ...props }) => {
  return (
    <span
      className={"animate-[blink_1s_ease_0s_infinite_normal_both]"}
      {...props}>
      <span className={dot} key={`dot_1`} />
      <span className={dot} key={`dot_2`} />
      <span className={dot} key={`dot_3`} />
    </span>
  );
};

LoadingDots.displayName = "LoadingDots";

export default LoadingDots;
/**
 *
 * .root {
  @apply inline-flex text-center items-center leading-7;
}

.root .dot {
  @apply rounded-full h-2 w-2;
  background-color: currentColor;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  margin: 0 2px;
}

.root .dot:nth-of-type(2) {
  animation-delay: 0.2s;
}

.root .dot::nth-of-type(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
 */
