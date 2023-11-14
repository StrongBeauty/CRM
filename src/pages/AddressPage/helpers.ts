import { DataType } from 'pages/AddressPage/types';

export const formatSuggestions = ({ data }: DataType): string => {
  const fields = [data.city_type_full, data.city, data.street_type_full, data.street, data.house_type_full, data.house];

  return fields
    .filter((field) => !!field)
    .map((field, index) => ((index + 1) % 2 === 0 ? field + ', ' : field + ' '))
    .join('')
    .slice(0, -2);
};
