import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth > 1200) {
  const baseAnimationProps = { duration: 1.5, opacity: 0, ease: "power2.inOut" };

  gsap.from(".card-1", { ...baseAnimationProps, x: -50 });

  gsap.from(".card-2", {
    ...baseAnimationProps,
    y: -50,
    scrollTrigger: {
      trigger: ".card-2",
      start: "top 60%",
    },
  });

  gsap.from(".card-3", {
    ...baseAnimationProps,
    x: -50,
    scrollTrigger: {
      trigger: ".card-3",
      start: "top 60%",
    },
  });

  gsap.from(".card-4", {
    ...baseAnimationProps,
    x: 50,
    scrollTrigger: {
      trigger: ".card-4",
      start: "top 70%",
    },
  });

  gsap.from(".card-5", {
    ...baseAnimationProps,
    y: 50,
    scrollTrigger: {
      trigger: ".card-5",
      start: "-50px 75%",
    },
  });

  gsap.from(".card-6", {
    ...baseAnimationProps,
    x: 50,
    scrollTrigger: {
      trigger: ".card-6",
      start: "top 75%",
    },
  });

  gsap.from(".card-7", { ...baseAnimationProps, y: -50 });

  gsap.from(".card-8", {
    ...baseAnimationProps,
    x: -50,
    scrollTrigger: {
      trigger: ".card-8",
      start: "top 60%",
    },
  });
}
