import { useLayoutEffect } from "react";

let activeLocks = 0;
let lockedScrollY = 0;
let previousBodyStyles: Partial<CSSStyleDeclaration> = {};
let previousRootOverflow = "";

export function useBodyScrollLock(locked: boolean) {
  useLayoutEffect(() => {
    if (!locked || typeof window === "undefined") return;

    activeLocks += 1;
    if (activeLocks === 1) {
      lockedScrollY = window.scrollY;
      previousBodyStyles = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        right: document.body.style.right,
        width: document.body.style.width,
        overflow: document.body.style.overflow,
        overscrollBehavior: document.body.style.overscrollBehavior,
      };
      previousRootOverflow = document.documentElement.style.overflow;
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      activeLocks = Math.max(0, activeLocks - 1);
      if (activeLocks !== 0) return;
      document.body.style.position = previousBodyStyles.position || "";
      document.body.style.top = previousBodyStyles.top || "";
      document.body.style.left = previousBodyStyles.left || "";
      document.body.style.right = previousBodyStyles.right || "";
      document.body.style.width = previousBodyStyles.width || "";
      document.body.style.overflow = previousBodyStyles.overflow || "";
      document.body.style.overscrollBehavior = previousBodyStyles.overscrollBehavior || "";
      document.documentElement.style.overflow = previousRootOverflow;
      window.scrollTo({ top: lockedScrollY, behavior: "instant" });
    };
  }, [locked]);
}
