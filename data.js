
window.addEventListener('DOMContentLoaded', () => {
  console.log("Tenekeci Yusuf Web Sitesi Başarıyla Yüklendi");

  const detailBtn = document.getElementById('detailBtn');
  const detailSection = document.getElementById('details');

  detailBtn.addEventListener('click', () => {
    detailSection.style.display = (detailSection.style.display === 'block') ? 'none' : 'block';
    detailBtn.textContent = (detailSection.style.display === 'block') ? "Kapat" : "Detaylı Bilgi";
  });
});


