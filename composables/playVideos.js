export function playVideos() {
  document.addEventListener(
    'play',
    function (e) {
      const videos = document.getElementsByTagName('video')
      for (let i = 0, len = videos.length; i < len; i++) {
        if (videos[i] !== e.target) {
          videos[i].pause()
        }
      }
    },
    true
  )
}

export function pauseVideos() {
  const videos = document.querySelectorAll('video')
  videos.forEach((video) => {
    if (isOutOfViewport(video)) {
      video.pause()
    }
  })
}

export function isOutOfViewport(el) {
  const rect = el.getBoundingClientRect()
  const parentRect = document
    .getElementById('desktop-body-wrapper')
    .getBoundingClientRect()
  return (
    rect.top >= (window.innerHeight || document.documentElement.clientHeight) ||
    rect.left >= (window.innerWidth || document.documentElement.clientWidth) ||
    rect.bottom <= parentRect.top ||
    rect.right <= 0
  )
}
