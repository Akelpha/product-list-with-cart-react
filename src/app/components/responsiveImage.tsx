"use client";
import React from "react";
import Image from "next/image";
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
// TODO: Add outline to the imafe when you click on the button
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={300}
      height={300}
      priority={false}
      className="object-cover rounded-2xl "
    />
  );
}
