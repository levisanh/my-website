const profile = {
  stats: [
    { value: '1m80', label: 'Chiều cao' },
    { value: '68kg', label: 'Cân nặng' },
    { value: '21', label: 'Tuổi' },
    { value: 'Nam', label: 'Người mẫu' }
  ],
  skills: [
    'Fashion editorial',
    'Commercial campaign',
    'Brand ambassador',
    'Photoshoot studio',
    'Lifestyle content',
    'Event appearance'
  ],
  gallery: [
    '798A4729-2_Original.JPG',
    '798A4903_Original.JPG',
    '798A5029_Original.JPG',
    '798A5047_Original.JPG',
    'A7401175.jpeg',
    'A7401181.jpeg',
    'A7401388.jpeg',
    'IMG_2306_Original.JPG',
    'IMG_2377_Original.JPG',
    'IMG_2436.JPG',
    'IMG_2578_Original.JPG',
    'IMG_8539_Original.JPG',
    'IMG_9775.JPG',
    'IMG_9779.JPG'
  ]
};

const statsRow = document.getElementById('stats-row');
const skillsList = document.getElementById('skills-list');
const galleryGrid = document.getElementById('gallery-grid');
const yearNode = document.getElementById('year');

profile.stats.forEach((stat) => {
  const box = document.createElement('div');
  const value = document.createElement('strong');
  const label = document.createElement('span');

  box.className = 'stat-box';
  value.textContent = stat.value;
  label.textContent = stat.label;
  box.append(value, label);
  statsRow.append(box);
});

profile.skills.forEach((skill) => {
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.textContent = skill;
  skillsList.append(tag);
});

profile.gallery.forEach((filename, index) => {
  const card = document.createElement('figure');
  const image = document.createElement('img');
  const caption = document.createElement('figcaption');
  const title = document.createElement('span');
  const number = document.createElement('span');

  card.className = 'gallery-item';
  image.src = `assets/images/${filename}`;
  image.alt = `Lê Quốc Anh Cao — ảnh portfolio ${index + 1}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  title.textContent = `Selected work ${String(index + 1).padStart(2, '0')}`;
  number.textContent = 'LQAC';
  caption.append(title, number);
  card.append(image, caption);
  galleryGrid.append(card);
});

yearNode.textContent = new Date().getFullYear();
