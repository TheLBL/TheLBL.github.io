function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

const containers = document.querySelectorAll('.text-container');

function checkVisibility() {
  containers.forEach(container => {
    if (isInViewport(container)) {
      container.classList.add('visible');
    } else {
      container.classList.remove('visible');
    }
  });
}

const imgs = document.querySelectorAll('.image-container img');
function checkImgVisibility() {
  imgs.forEach(img => {
    const rect = img.getBoundingClientRect();
    if(rect.top <= window.innerHeight && rect.bottom >= 0){
      img.classList.add('visible');
    } else {
      img.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', checkImgVisibility);
window.addEventListener('load', checkImgVisibility);


window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
