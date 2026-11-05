"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/icon";

type PointerStart = {
  id: number;
  x: number;
  y: number;
};

const showcaseImages = [
  {
    src: "/projects/showcase-07.jpg",
    alt: "White ceramic bathroom fixtures on display.",
  },
  {
    src: "/projects/showcase-10.jpg",
    alt: "A white toilet and pedestal basin on display.",
  },
  {
    src: "/projects/showcase-02.jpg",
    alt: "Shelves and boxes of sanitary ware in a stockroom.",
  },
  {
    src: "/projects/showcase-15.jpg",
    alt: "Packaged flexible plumbing hoses in stock.",
  },
  {
    src: "/projects/showcase-05.jpg",
    alt: "Bathroom fixtures arranged in a showroom display.",
  },
  {
    src: "/projects/showcase-17.jpg",
    alt: "A packaged faucet and plumbing fittings.",
  },
  {
    src: "/projects/showcase-01.jpg",
    alt: "White ceramic toilet displayed on a pedestal.",
  },
  {
    src: "/projects/showcase-14.jpg",
    alt: "A marble-pattern toilet and basin on display.",
  },
  {
    src: "/projects/showcase-08.jpg",
    alt: "A row of ceramic toilets with product signage.",
  },
  {
    src: "/projects/showcase-13.jpg",
    alt: "A collection of packaged plumbing fittings.",
  },
  {
    src: "/projects/showcase-04.jpg",
    alt: "White ceramic toilets with black detailing on display.",
  },
  {
    src: "/projects/showcase-12.jpg",
    alt: "Ceramic toilets and bathroom products grouped in stock.",
  },
  {
    src: "/projects/showcase-06.jpg",
    alt: "A sink and ceramic toilets in a product showroom.",
  },
  {
    src: "/projects/showcase-18.jpg",
    alt: "Packaged white plumbing pipe fittings.",
  },
  {
    src: "/projects/showcase-09.jpg",
    alt: "Ceramic toilet samples and product signage in a stockroom.",
  },
  {
    src: "/projects/showcase-16.jpg",
    alt: "A black ceramic toilet and basin on display.",
  },
  {
    src: "/projects/showcase-03.jpg",
    alt: "White ceramic sanitary ware displayed among product boxes.",
  },
  {
    src: "/projects/showcase-11.jpg",
    alt: "A decorative-pattern ceramic basin and toilet displayed on boxes.",
  },
];

export function ProjectShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerStartRef = useRef<PointerStart | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const nextIndex = Math.max(0, Math.min(index, showcaseImages.length - 1));
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left: nextIndex * track.clientWidth,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveIndex(nextIndex);
  }

  function updateActiveSlide() {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    const nextIndex = Math.min(
      showcaseImages.length - 1,
      Math.round(track.scrollLeft / track.clientWidth),
    );
    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex,
    );
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    if (event.pointerType === "mouse") {
      event.preventDefault();
    }

    pointerStartRef.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };

    if (event.pointerType !== "touch") {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const pointerStart = pointerStartRef.current;
    pointerStartRef.current = null;
    if (!pointerStart || pointerStart.id !== event.pointerId) return;

    const distanceX = event.clientX - pointerStart.x;
    const distanceY = event.clientY - pointerStart.y;
    const swipeThreshold = Math.max(
      40,
      (trackRef.current?.clientWidth ?? 0) * 0.12,
    );

    if (
      Math.abs(distanceX) < swipeThreshold ||
      Math.abs(distanceX) <= Math.abs(distanceY)
    ) {
      return;
    }

    goToSlide(activeIndex + (distanceX < 0 ? 1 : -1));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }
  }

  return (
    <div
      className="project-showcase"
      role="region"
      aria-label="Project showcase"
      aria-roledescription="carousel"
    >
      <div
        className="project-showcase__track"
        ref={trackRef}
        onScroll={updateActiveSlide}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStartRef.current = null;
        }}
        onKeyDown={handleKeyDown}
        onDragStart={(event) => event.preventDefault()}
        tabIndex={0}
        aria-label="Swipe, use the arrow keys, or use the controls to browse images"
      >
        {showcaseImages.map((image, index) => (
          <figure
            className="project-showcase__slide"
            key={image.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${showcaseImages.length}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 760px) 100vw, 52vw"
              priority={index === 0}
              draggable={false}
            />
          </figure>
        ))}
      </div>

      <div className="project-showcase__controls">
        <div className="project-showcase__pagination" aria-label="Choose image">
          {showcaseImages.map((image, index) => (
            <button
              className={`project-showcase__dot${activeIndex === index ? " is-active" : ""}`}
              key={image.src}
              type="button"
              aria-label={`Show image ${index + 1} of ${showcaseImages.length}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <span className="project-showcase__status" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(showcaseImages.length).padStart(2, "0")}
        </span>
        <div className="project-showcase__arrows">
          <button
            type="button"
            aria-label="Previous image"
            disabled={activeIndex === 0}
            onClick={() => goToSlide(activeIndex - 1)}
          >
            <Icon name="arrow-left" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            disabled={activeIndex === showcaseImages.length - 1}
            onClick={() => goToSlide(activeIndex + 1)}
          >
            <Icon name="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
