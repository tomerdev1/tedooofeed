export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getTimeSinceDate(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const elapsed = Math.floor(seconds / secondsInUnit);
    if (elapsed >= 1) {
      return `${elapsed} ${unit}${elapsed > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
