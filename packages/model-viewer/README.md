# `@takeda-digital/model-viewer`

## Model Viewer Release (v1.0.2) 🎉

- [An article 📃 I published mid-last week outlining the process in detail](https://dev.to/asross311/a-strongly-typed-google-model-viewer-implementation-in-react-3m5c)

## Package Overview

#### `@takeda-digital/model-viewer` is a small but powerful package weighing in at ~5kb

- This package augments your React namespace to incorporate an `HTMLModelViewerAttributes<T>` property containing an internal `globalThis.HTMLElementTagNameMap['model-viewer']` type -- aka, the `ModelViewerElement` from the `@google/model-viewer` package

---

![model-viewer-package](https://user-images.githubusercontent.com/46355797/206958685-453f2221-7e29-4d5b-941b-0c0620f93136.png)

---

#### How to use this package? Here's a brief example

- Install `@google/model-viewer` as a dependency

```bash
yarn add @google/model-viewer
```

```bash
npm i @google/model-viewer
```

- import a `RootScript` element as shown below in `src/pages/_app.tsx`
- This element injects the root of the app with an async module-script for the package

```tsx
import "../styles/index.css";
import type { UIAppProps } from "@takeda-digital/ui";
import "@takeda-digital/ui/globals.css";
import { RootScript } from "@takeda-digital/model-viewer";
import Script from "next/script";
/**
 * Shim requestIdleCallback in Safari
 */
if (
  typeof window !== "undefined" &&
  !(typeof { requestIdleCallback } in window)
) {
  window.requestIdleCallback = fn => setTimeout(fn, 1);
  window.cancelIdleCallback = e => clearTimeout(e);
}

export default function TakedaDigitalWeb({
  Component,
  pageProps
}: UIAppProps<any>) {
  return (
    <>
      <RootScript strategy='afterInteractive' />
      <Component {...pageProps} />
    </>
  );
}
```

#### Consume ModelViewer

- import the pre-configured `ModelViewer` element from this package or roll your own `model-viewer` -- the choice is yours
- You'll find that `model-viewer` is now a `JSX.IntrinsicElement` after following the steps above 🌑

- [read more here](https://modelviewer.dev/docs/#augmentedreality)

- `src/components/ModelViewer.tsx`

```tsx
import {
  posterPath,
  ModelViewer,
  glbPicker,
  LoadingDots
} from "@takeda-digital/model-viewer";
import { Suspense } from "react";

export const ModelViewerCustom = () => {
  return (
    <Suspense fallback={<LoadingDots />}>
      <div className='min-h-screen min-w-[100vw]' id='card'>
        <ModelViewer
          src={glbPicker({ glb: "unrealMacBookPro14" })}
          id='viewer'
          shadow-intensity='1'
          camera-controls
          touch-action='pan-y'
          withCustomButton={true}
          customButtonOverride={
            <button
              slot='ar-button'
              id='ar-button'
              className='bg-takeda-red font-normal tracking-wide text-white'>
              View in your space
            </button>
          }
          auto-rotate
          data-ar
          ar
          ar-status='not-presenting'
          ar-modes='webxr scene-viewer quick-look'
          poster={posterPath}
          className='modelViewer'
          withArButton={true}></ModelViewer>
      </div>
    </Suspense>
  );
};

export const ModelViewerDefault = () => {
  return (
    <Suspense fallback={<LoadingDots />}>
      <ModelViewer ar src={glbPicker<"surfaceHub">({ glb: "surfaceHub" })} />
    </Suspense>
  );
};
```

### Just import and render -- it's really that simple

- `src/pages/index.tsx`

```tsx
import Head from "next/head";
import styles from "../styles/home.module.css";
import cn from "clsx";
import {
  ModelViewerCustom,
  ModelViewerDefault
} from "@/components/sanity/hooks/ModelViewer";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{"Indexer Init."}</title>
          <meta name='description' content='Indexer Package' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={cn(styles.main)}>
          <section className='whitespace-nowrap'>
            <div className='grid grid-cols-2'>
              <ModelViewerCustom />
              <ModelViewerDefault />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
```
