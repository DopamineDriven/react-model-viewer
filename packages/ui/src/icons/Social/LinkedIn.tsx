import type { FC } from "react";
import { UI } from "../../typedefs/namespace";

const LinkedIn: FC<UI.JSX.ReactMapped["svg"]> = ({ ...svg }) => (
  <svg
    width='28'
    height='27'
    viewBox='0 0 28 27'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...svg}>
    <path
      d='M0.346354 8.77316H6.36198V27H0.346354V8.77316ZM5.8151 0.89203C6.42274 1.48672 6.73264 2.23774 6.74479 3.1451C6.75694 4.04019 6.45009 4.78815 5.82422 5.38896C5.19835 5.98978 4.375 6.29019 3.35417 6.29019H3.31771C2.32118 6.29019 1.5191 5.98978 0.911458 5.38896C0.303819 4.78815 0 4.04019 0 3.1451C0 2.23774 0.312934 1.48672 0.938802 0.89203C1.56467 0.297343 2.38194 0 3.39062 0C4.39931 0 5.20747 0.297343 5.8151 0.89203ZM26.1042 10.4377C27.3681 11.8294 28 13.8678 28 16.5531V27H22.0026V17.252C22.0026 15.9646 21.7565 14.9561 21.2643 14.2265C20.7721 13.4969 20.0035 13.1322 18.9583 13.1322C18.1927 13.1322 17.5516 13.3437 17.0352 13.7667C16.5187 14.1897 16.1328 14.7139 15.8776 15.3392C15.7439 15.7071 15.6771 16.2037 15.6771 16.829V27H9.67969C9.70399 22.1076 9.71615 18.141 9.71615 15.1001C9.71615 12.0593 9.71007 10.2446 9.69792 9.65599L9.67969 8.77316H15.6771V11.4217H15.6406C15.8837 11.0293 16.1328 10.686 16.388 10.3917C16.6432 10.0974 16.9865 9.77861 17.418 9.43529C17.8494 9.09196 18.378 8.82527 19.0039 8.63522C19.6298 8.44516 20.3255 8.35014 21.0911 8.35014C23.1693 8.35014 24.8403 9.04598 26.1042 10.4377Z'
      fill={svg.fill ? svg.fill : "#e1242a"}
    />
  </svg>
);

LinkedIn.displayName = "LinkedIn";

export default LinkedIn;