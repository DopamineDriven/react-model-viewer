import * as React from "react";

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type ExtractAttributeElementTandem<T> =
  T extends React.DetailedHTMLProps<infer U, Element> ? U : T;

export type ExtractAttributeElementFromReactType<T> =
  T extends React.ElementType<infer U> ? U : T;

export type AttributeElementMap = {
  [P in keyof globalThis.JSX.IntrinsicElements]: ExtractAttributeElementTandem<
    globalThis.JSX.IntrinsicElements[P]
  >;
};

export type AttributeElementToReactElement = {
  [P in keyof AttributeElementMap]: React.ElementType<AttributeElementMap[P]>;
};

export type ReqOnlyOneJSX<P extends keyof AttributeElementMap> = RequireOnlyOne<
  AttributeElementMap,
  P
>;

export type GetScalarType<T, O> = O extends Record<string, unknown>
  ? { [P in keyof T]: P extends keyof O ? O[P] : never }
  : never;

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * @type XOR is needed to have a real mutually exclusive union type
 * @url
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types}
 */
export type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
