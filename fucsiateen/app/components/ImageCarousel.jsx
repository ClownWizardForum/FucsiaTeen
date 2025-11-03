"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./image-carousel.module.scss";

export default function ImageCarousel({ slides, interval = 5000 }) {
  const stableSlides = useMemo(() => slides ?? [], [slides]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (stableSlides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stableSlides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [stableSlides.length, interval]);

  if (stableSlides.length === 0) {
    return null;
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = stableSlides[currentIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.slideTrack}>
        <Image
          key={currentSlide.image}
          src={currentSlide.image}
          alt={currentSlide.alt}
          fill
          sizes="(max-width: 768px) 90vw, 30rem"
          priority={currentIndex === 0}
          className={styles.slideImage}
        />
      </div>
      <div className={styles.content}>
        <h3>{currentSlide.title}</h3>
        <p>{currentSlide.description}</p>
        <Link href={currentSlide.href} className={styles.cta}>
          Ver más
        </Link>
      </div>
      {stableSlides.length > 1 && (
        <div className={styles.dots}>
          {stableSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ver ${slide.title}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
