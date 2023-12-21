window.addEventListener('load', function() {
  const gallery = document.querySelector('.gallery');

  const photos = [
    'gamba1.jpg',
    'gambar2.jpg',
    'gambar3.jpg'
    // Tambahkan nama file gambar lainnya di sini
  ];

  photos.forEach(function(photo) {
    const img = document.createElement('img');
    img.src = photo;
    gallery.appendChild(img);
  });
});