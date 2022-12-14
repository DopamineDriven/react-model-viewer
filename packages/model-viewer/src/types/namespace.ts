export namespace RMV {
  export module Helpers {
    export type Booleanish = boolean | `${boolean}`;

    export type Unenumerate<T> = T extends Array<infer U> ? U : T;

    export type Enumerable<T> = T | T[];

    export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

    export type UnwrapAwaitable<T> = T extends PromiseLike<infer U> ? U : T;

    export type PromiseOrSync<T> = T | Promise<T>;

    export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

    export type XOR<T, U> = T | U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : T | U;

    export type RemoveFields<Type, P extends keyof Type = keyof Type> = {
      [Property in keyof Type as Exclude<Property, P>]: Type[Property];
    };

    export type MakeTargetedRequired<
      T,
      Z extends keyof T = keyof T
    > = RemoveFields<T, Z> & { [Q in Z]-?: T[Q] };

    export type MakeTargetedOptional<
      T,
      X extends keyof T = keyof T
    > = T[X] extends undefined
      ? T[X]
      : RemoveFields<T, X> & { [Q in X]?: T[Q] };
  }
  export module TSX {
    export type ExtractAttributeElementTandem<T> =
      T extends React.DetailedHTMLProps<infer U, Element> ? U : T;

    export type AttributeElementMap = {
      [P in keyof globalThis.JSX.IntrinsicElements]: ExtractAttributeElementTandem<
        globalThis.JSX.IntrinsicElements[P]
      >;
    };

    export type RecursiveOptional<T> = {
      [P in keyof T]?: RecursiveOptional<T[P]>;
    };

    export type OmitRecursiveOptionalRecursionAgent<T> =
      T extends RecursiveOptional<infer U> ? U : T;

    export type ReactMapped = {
      [P in keyof AttributeElementMap]: AttributeElementMap[P];
    };
  }
}

export default RMV;
