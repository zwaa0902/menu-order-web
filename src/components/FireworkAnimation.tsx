"use client";

import Lottie from "lottie-react";
import React, { useRef, useEffect } from "react";
import animationData from "@/public/animations/success.json";

export default function FireworkAnimation() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60">
      <Lottie
        lottieRef={animationRef}
        animationData={animationData}
        loop={true}
        style={{
          width: "50%",
          height: "50%",
          position: "absolute",
          top: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
