// Use GSAP for animations
gsap.from("header", { opacity: 0, duration: 1, y: -50, ease: "power1.out" });
gsap.from("nav ul li", { opacity: 0, duration: 1, y: -50, stagger: 0.2, delay: 0.5, ease: "power1.out" });
gsap.from("section", { opacity: 0, duration: 1, y: 50, stagger: 0.5, delay: 1, ease: "power1.out" });
gsap.from("footer", { opacity: 0, duration: 1, y: 50, delay: 1.5, ease: "power1.out" });
