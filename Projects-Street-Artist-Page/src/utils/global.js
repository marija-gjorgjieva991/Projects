let currentArtist;

export function getArtist() {
  return currentArtist;
}

export function setArtist(_artist) {
  currentArtist = _artist;
}

export function displayArtist(headerId) {
  const selectedArtist = getArtist();
  const artistNameElement = document.getElementById(headerId);
  if (artistNameElement) {
    const artistNameWithoutSpaces = selectedArtist.replace(/\s+/g, "");
    artistNameElement.textContent = artistNameWithoutSpaces;
  }
}
