import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import useMedia from "use-media";

interface ResponsiveImageProps {
  src: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  alt: string;
}

export default function ResponsiveImage({ src, alt }: ResponsiveImageProps) {
  const isMobile = useMedia({ maxWidth: "767px" });
  const isTablet = useMedia({ minWidth: "768px", maxWidth: "1023px" });
  const isDesktop = useMedia({ minWidth: "1024px" });

  let imageSrc = src.thumbnail;

  if (isMobile) {
    imageSrc = src.mobile;
  } else if (isTablet) {
    imageSrc = src.tablet;
  } else if (isDesktop) {
    imageSrc = src.desktop;
  }

  return <Image src={imageSrc} alt={alt} layout="responsive" />;
}
