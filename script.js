// Al cargar la página, animamos suavemente cada foto
document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((img, idx) => {
      setTimeout(() => {
        img.style.transform = 'scale(1)';
        img.style.opacity = '1';
      }, 200 * idx);
    });
  });
  