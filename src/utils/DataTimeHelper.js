export const getDateTime = () => {
  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(Date.now());
};
