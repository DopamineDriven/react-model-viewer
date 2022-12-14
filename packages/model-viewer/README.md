# `@react/model-viewer`

## Model Viewer Release (v1.0.0) 🎉

- [An article 📃 I published mid-last week outlining the process in detail](https://dev.to/asross311/a-strongly-typed-google-model-viewer-implementation-in-react-3m5c)

## Package Overview

#### `@react/model-viewer` is a small but powerful package weighing in at ~5kb

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

### Nextjs users

- import a `Script` element from `next/script` as shown below in `src/pages/_app.tsx`
- Inject the root of the app with an async module-script for the package

```tsx
import "../styles/index.css";
import type { AppProps } from "next/app";
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

export default function ReactModelViewerNext({
  Component,
  pageProps
}: AppProps) {
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        type='module'
        src='https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js'
      />
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
import { ModelViewer } from "@react/model-viewer";
import { Suspense } from "react";

export const ModelViewerComponent = () => {
  return (
    <Suspense fallback={<LoadingDots />}>
      <div className='min-h-screen min-w-[100vw]'>
        <ModelViewer
          src={
            "https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb"
          }
          id='viewer'
          shadow-intensity='1'
          camera-controls
          touch-action='pan-y'
          auto-rotate
          data-ar
          alt='a 3d astronaut model'
          ar
          ar-status='not-presenting'
          ar-modes='webxr scene-viewer quick-look'
          poster={"/path/to/image.png"}
          withArButton={true}></ModelViewer>
      </div>
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
import { ModelViewerComponent } from "@/components/ModelViewer";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{"Model Viewer Init."}</title>
          <meta name='description' content='Model Viewer Package' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={cn(styles.main)}>
          <section className='whitespace-nowrap'>
            <div className='block'>
              <ModelViewerComponent />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
```
