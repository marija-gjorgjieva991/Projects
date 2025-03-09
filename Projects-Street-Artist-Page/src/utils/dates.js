export function timestampNow() {
  return new Date().valueOf();
}

export function generateDateLabels(daysAgo) {
  const labels = [];

  for (let i = 0; i < daysAgo; i++) {
    const now = new Date();

    const date = now.getDate();
    const offsetDate = now.setDate(date - i);

    const formattedLabel = formatDateEn(offsetDate);

    labels.push(formattedLabel);
  }

  return labels;
}

export function formatDateEn(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

export function formatDate(date) {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return new Date(date)
    .toLocaleDateString("en-GB", options)
    .replace(/\//g, ".");
}
