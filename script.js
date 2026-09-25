const profile = {
  heroImage: 'assets/images/2026_01_10_23_51_IMG_0586.png',
  stats: [
    { value: '1m80', label: 'chiều cao' },
    { value: '68kg', label: 'cân nặng' },
    { value: '21', label: 'tuổi' },
    { value: 'Vai rộng', label: 'dáng vững' }
  ],
  skills: [
    'Model nam thời trang',
    'Commercial campaign',
    'Brand ambassador',
    'Photoshoot studio',
    'Event appearance',
    'Lifestyle & social content',
    'Body fit / fashion look',
    'Portrait & photographer',
    'Web design & creative coding',
    'Content creation'
  ],
  gallery: [
    { title: 'Editorial look', image: 'assets/images/IMG_2331.JPG' },
    { title: 'Luxury campaign', image: 'assets/images/IMG_3713.jpeg' },
    { title: 'Studio portrait', image: 'assets/images/IMG_5971.JPG' },
    { title: 'City style', image: 'assets/images/IMG_7135.JPG' },
    { title: 'Beauty close-up', image: 'assets/images/IMG_2331.JPG' },
    { title: 'Campaign aesthetic', image: 'assets/images/IMG_3713.jpeg' }
  ],
  videos: [
    {
      title: 'Showreel body',
      duration: '00:58',
      thumbnail: 'assets/images/IMG_3713.jpeg',
      url: 'assets/images/1.mp4'
    },
    {
      title: 'Behind the scenes',
      duration: '01:24',
      thumbnail: 'assets/images/IMG_5971.JPG',
      url: 'assets/images/1.mp4'
    },
    {
      title: 'Beauty lookbook',
      duration: '00:46',
      thumbnail: 'assets/images/IMG_7135.JPG',
      url: 'assets/images/1.mp4'
    }
  ]
};

const heroImage = document.getElementById('hero-image');
const statsRow = document.getElementById('stats-row');
const skillsList = document.getElementById('skills-list');
const galleryGrid = document.getElementById('gallery-grid');
const videoList = document.getElementById('video-list');
const yearNode = document.getElementById('year');
const featureVideo = document.querySelector('.video-feature video');

if (heroImage && profile.heroImage) {
  heroImage.src = profile.heroImage;
}

profile.stats.forEach((stat) => {
  const box = document.createElement('div');
  box.className = 'stat-box';
  box.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
  statsRow.appendChild(box);
});

profile.skills.forEach((skill) => {
  const tag = document.createElement('span');
  tag.className = 'skill-tag';
  tag.textContent = skill;
  skillsList.appendChild(tag);
});

profile.gallery.forEach((item) => {
  const card = document.createElement('figure');
  card.className = 'gallery-item';
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <figcaption class="caption">${item.title}</figcaption>
  `;
  galleryGrid.appendChild(card);
});

profile.videos.forEach((video, index) => {
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'video-item';
  if (index === 0) item.classList.add('active');
  item.setAttribute('aria-label', `Play ${video.title}`);
  item.innerHTML = `
    <div class="video-thumbnail">
      <img src="${video.thumbnail}" alt="${video.title}" />
      <span class="video-duration">${video.duration}</span>
    </div>
    <div class="video-meta">
      <h4>${video.title}</h4>
      <p>Portfolio reel</p>
    </div>
  `;

  item.addEventListener('click', () => {
    document.querySelectorAll('.video-item').forEach((el) => el.classList.remove('active'));
    item.classList.add('active');
    featureVideo.src = video.url;
    featureVideo.load();
    featureVideo.play();
  });

  videoList.appendChild(item);
});

yearNode.textContent = new Date().getFullYear();
