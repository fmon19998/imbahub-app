// DOM Element kategori
const baratList = document.getElementById('barat-list');
const jepangList = document.getElementById('jepang-list');
const indonesiaList = document.getElementById('indonesia-list');

// Login Admin
function login() {
  const pass = document.getElementById('adminPassword').value;
  if (pass === 'imbahub123') {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('upload-section').style.display = 'block';
  } else {
    alert('Password salah bro!');
  }
}

// Upload Video
async function uploadVideo() {
  const title = document.getElementById('videoTitle').value;
  const file = document.getElementById('videoFile').files[0];
  const category = document.getElementById('videoCategory').value;

  if (!title || !file || category === 'all') {
    alert("Lengkapi judul, file, dan kategori bro!");
    return;
  }

  const formData = new FormData();
  formData.append('video', file);

  try {
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    const videoURL = data.url;

    const card = document.createElement('div');
    card.className = 'video-card';
    card.setAttribute('data-category', category);
    card.innerHTML = `
      <h4>${title}</h4>
      <small class="category-label">${category.toUpperCase()}</small>
      <video controls><source src="${videoURL}" type="video/mp4"></video>
      <a class="download-btn" href="${videoURL}" download="${title}.mp4">⬇️ Download Video</a>
    `;

    if (category === 'barat') {
      baratList.prepend(card);
    } else if (category === 'jepang') {
      jepangList.prepend(card);
    } else if (category === 'indonesia') {
      indonesiaList.prepend(card);
    }

    document.getElementById('videoTitle').value = '';
    document.getElementById('videoFile').value = '';
  } catch (err) {
    console.error(err);
    alert("Upload gagal bro!");
  }
}

// Search
function searchVideo() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.video-card');

  cards.forEach(card => {
    const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(input) ? 'block' : 'none';
  });
}

// Filter
function filterCategory() {
  const selected = document.getElementById('filterCategory').value;
  const allSections = document.querySelectorAll('.category-section');

  allSections.forEach(section => {
    const list = section.querySelector('.video-list');
    const catId = list.id.replace('-list', '');
    section.style.display = (selected === 'all' || selected === catId) ? 'block' : 'none';
  });
}
