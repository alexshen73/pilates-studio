import Image from "next/image";

type HeroMediaProps = {
  imageSrc: string;
  imageAlt: string;
  // Коли з'явиться зациклене hero-відео: покласти файл у public/ і передати videoSrc="/video/hero.mp4"
  videoSrc?: string;
};

export function HeroMedia({ imageSrc, imageAlt, videoSrc }: HeroMediaProps) {
  if (videoSrc) {
    return (
      <video
        className="heroVisualVideo"
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-label={imageAlt}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      priority
      unoptimized
      sizes="(min-width: 768px) 50vw, 100vw"
      className="heroVisualImage"
    />
  );
}
