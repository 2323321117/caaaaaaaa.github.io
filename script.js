window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  if (maxScroll <= 0) return;

  const progress = Math.min(scroll / maxScroll, 1);

  document.body.style.setProperty(
    '--fade-bg',
    `rgba(0,0,0,${0.5 * progress})`
  );

  document.body.style.setProperty(
    '--fade-blur',
    `${8 * progress}px`
  );
});
