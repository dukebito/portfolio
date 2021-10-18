const el = document.querySelector('.side-scroll-list');

gsap.to(el, {
  xPercent: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll',
    start: 'top top', // 要素の上端（top）が、ビューポートの上端（top）にきた時
    end: `+=${el.clientWidth}`, // リストの横幅分移動したら終わり
    scrub: true,
    pin: true,
  },
});