window.addEventListener('load', (load) => {
  const titleHistory = document.getElementById('title-history');
  const buttonHistory = document.getElementById('button-history');
  const titleTimeline = document.getElementById('title-timeline');
  const buttonTimeline = document.getElementById('button-timeline');
  const titlePlayerRoster = document.getElementById('title-player-roster');
  const buttonPlayerRoster = document.getElementById('button-player-roster');
  const titleResults = document.getElementById('title-results');
  const buttonResults = document.getElementById('button-results');
  const titleGallery = document.getElementById('title-gallery');
  const buttonGallery = document.getElementById('button-gallery');

  window.addEventListener('scroll', (event) => {
    if (titleGallery.getBoundingClientRect().top - 50 < 0) {
      selectButton(buttonGallery);
    } else if (titleResults.getBoundingClientRect().top - 50 < 0) {
      selectButton(buttonResults);
    } else if (titlePlayerRoster.getBoundingClientRect().top - 50 < 0) {
      selectButton(buttonPlayerRoster);
    } else if (titleTimeline.getBoundingClientRect().top - 50 < 0) {
      selectButton(buttonTimeline);
    } else if (titleHistory.getBoundingClientRect().top - 50 < 0) {
      selectButton(buttonHistory);
    } else {
      selectButton(null);
    }
  });

  function selectButton(element) {
    if (buttonHistory.classList.contains('selected')) {
      buttonHistory.classList.remove('selected');
    }
    if (buttonTimeline.classList.contains('selected')) {
      buttonTimeline.classList.remove('selected');
    }
    if (buttonPlayerRoster.classList.contains('selected')) {
      buttonPlayerRoster.classList.remove('selected');
    }
    if (buttonResults.classList.contains('selected')) {
      buttonResults.classList.remove('selected');
    }
    if (buttonGallery.classList.contains('selected')) {
      buttonGallery.classList.remove('selected');
    }

    if (element != null) {
      element.classList.add('selected');
    }
  }

  buttonHistory.onclick = function () {
    window.scrollTo({
      top: titleHistory.getBoundingClientRect().top - 50 + window.pageYOffset,
      behavior: 'smooth',
    });
  };
  buttonTimeline.onclick = function () {
    window.scrollTo({
      top: titleTimeline.getBoundingClientRect().top - 50 + window.pageYOffset,
      behavior: 'smooth',
    });
  };
  buttonPlayerRoster.onclick = function () {
    window.scrollTo({
      top: titlePlayerRoster.getBoundingClientRect().top - 50 + window.pageYOffset,
      behavior: 'smooth',
    });
  };
  buttonResults.onclick = function () {
    window.scrollTo({
      top: titleResults.getBoundingClientRect().top - 50 + window.pageYOffset,
      behavior: 'smooth',
    });
  };
  buttonGallery.onclick = function () {
    window.scrollTo({
      top: titleGallery.getBoundingClientRect().top - 50 + window.pageYOffset,
      behavior: 'smooth',
    });
  };
});
