import { type ModelViewerHTMLAttributes, type FC } from "react";
import cn from "clsx";
import { ModelViewerElement } from "@google/model-viewer";

export type ModelViewerMapped = {
  [P in keyof ModelViewerHTMLAttributes<{
    [Z in keyof ModelViewerElement]: ModelViewerElement[Z];
  }>]: ModelViewerHTMLAttributes<{
    [Z in keyof ModelViewerElement]: ModelViewerElement[Z];
  }>[P];
};
/**
 * @description
 * the `@google/model-viewer` ModelViewerElement is augmented
 * and injected as one of Reacts very own
 *
 * @property withArButton is required
 *
 * ```mdx
 * [ModelViewerElement Docs](https://modelviewer.dev/examples/augmentedreality/)
 * ```
 */

const ModelViewer: FC<ModelViewerMapped> = props => {
  const {
    children,
    ar,
    className,
    withArButton,
    "ar-scale": arScale,
    "ar-placement": arPlacement,
    "ar-status": arStatus,
    "interaction-prompt": interactionPrompt,
    "interaction-prompt-style": interactionPromptStyle,
    "skybox-image": skyboxImage,
    "touch-action": touchAction,
    "shadow-intensity": shadowIntensity,
    style = {},
    ...rest
  } = props;
  const rootClassName = cn(className ? className : ``);
  return (
    <model-viewer
      withArButton={withArButton}
      style={{
        maxWidth: style?.maxWidth ? style.maxWidth : "100%",
        display: style?.display ? style.display : "block",
        ...style
      }}
      ar={ar}
      ar-scale={arScale ? arScale : "auto"}
      ar-placement={arPlacement ? arPlacement : "floor"}
      shadow-intensity={shadowIntensity ? shadowIntensity : "0"}
      camera-controls
      touch-action={touchAction ? touchAction : "pan-y"}
      auto-rotate
      ar-status={arStatus ? arStatus : undefined}
      ar-modes='webxr quick-look scene-viewer'
      className={rootClassName}
      interaction-prompt={interactionPrompt ? interactionPrompt : "auto"}
      interaction-prompt-style={
        interactionPromptStyle ? interactionPromptStyle : "wiggle"
      }
      skybox-image={skyboxImage ? skyboxImage : undefined}
      {...rest}>
      {withArButton ? (
        <>
          <button
            slot='ar-button'
            id='ar-button'
            style={{
              backgroundColor: "#e1242a",
              fontWeight: 400,
              letterSpacing: "0.025rem",
              color: "white"
            }}>
            View in your space
          </button>
          {children ?? <></>}
        </>
      ) : (
        children ?? <></>
      )}
    </model-viewer>
  );
};

ModelViewer.displayName = "ModelViewer";

export default ModelViewer;
