import { formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

export function formatDateInWords(date) {
  return formatDistance(new Date(date), new Date(), {
    locale: en,
  });
}
