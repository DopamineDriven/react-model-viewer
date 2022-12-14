import type { ModelViewerElement } from "@google/model-viewer";
export { default as ModelViewer } from "./components/ModelViewer";
export type { ModelViewerMapped } from "./components/ModelViewer/ModelViewer";
export type { default as RMV } from "./types/namespace";

declare global {
  export namespace React {
    export interface ModelViewerHTMLAttributes<T>
      extends React.AllHTMLAttributes<T> {
      withArButton: boolean;
      /**@property ar  */
      ar: boolean;
      /**@property src - the path or url to a 3d object */
      src: string;
      /**@property alt - describe the model to viewers who use a screen reader or otherwise depend on additional semantic context */
      alt: string;
      error?: Error;
      "ar-scale"?: "auto" | "fixed";
      "ar-placement"?: "floor" | "wall";
      loading?: "auto" | "eager" | "lazy";
      reveal?: "auto" | "manual";
      "xr-environment"?: boolean;
      "interaction-prompt"?: "auto" | "none";
      "ar-status"?:
        | "not-presenting"
        | "session-started"
        | "object-placed"
      | "failed";
      "touch-action"?: "pan-x" | "pan-y" | "none";
      "with-credentials"?: boolean;
      "model-visibility"?: boolean;
      "interaction-prompt-style"?: "wiggle" | "basic";
      /**@property `shadow-softness` any string value between 0 and 1 */
      "shadow-softness"?: string;
      /**@property `shadow-intensity` any string value between 0 and 1 */
      "shadow-intensity"?: string;
      /**@property `skybox-image` - sets background image of the scene -- accepts png, jpg, or hdr (recommended) */
      "skybox-image"?: string;
      /** @property poster -- fallback/placeholder image while 3d object is loading */
      poster: string | undefined;
      /** @property iosSrc -- replace the .glb extension with a .usdz extension for iOS*/
      iosSrc?: string;
      loaded?: boolean;
      minimumRenderScale?: number;
      modelIsVisible?: boolean;
      modelCacheSize?: number;
      powerPreference?: "high-performance" | "low-power" | "default";
      canActivateAr?: boolean;
    }
  }
  export namespace JSX {
    export interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.ModelViewerHTMLAttributes<{
          [P in keyof ModelViewerElement]: ModelViewerElement[P];
        }>,
        { [P in keyof ModelViewerElement]: ModelViewerElement[P] }
      >;
    }
  }
}
