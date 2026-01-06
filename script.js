const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.pointerEvents = 'none';
overlay.style.zIndex = '-1';
overlay.style.backdropFilter = 'blur(0px)';
overlay.style.background = 'rgba(0,0,0,0)';
document.body.appendChild(overlay);

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = Math.min(scroll / maxScroll, 1);

  overlay.style.background = `rgba(0,0,0,${0.5 * progress})`;
  overlay.style.backdropFilter = `blur(${8 * progress}px)`;
});
