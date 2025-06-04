fetch('episodes.json')
  .then(response => response.json())
  .then(data => {
    const episodeList = document.getElementById('episode-list');
    const videoFrame = document.getElementById('video-frame');

    data.episodes.forEach((ep, index) => {
      const btn = document.createElement('button');
      btn.className = 'episode-button';
      btn.textContent = `Episode ${index + 1}`;
      btn.onclick = () => {
        videoFrame.src = ep.gdrive_embed;
      };
      episodeList.appendChild(btn);
    });

    if (data.episodes.length > 0) {
      videoFrame.src = data.episodes[0].gdrive_embed;
    }
  });