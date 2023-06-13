export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "2-digit",
  }).format(new Date(date));
