/**
 * Formats date strings or Date objects into clean business formats.
 */
export function formatDate(
  input: string | Date | number,
  format: 'short' | 'medium' | 'datetime' | 'relative' = 'medium'
): string {
  const date = new Date(input);
  if (isNaN(date.getTime())) return '-';

  if (format === 'relative') {
    const now = Date.now();
    const diff = now - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  }

  if (format === 'short') {
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  }

  if (format === 'datetime') {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
