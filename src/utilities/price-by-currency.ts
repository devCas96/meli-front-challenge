export default function priceByCurrency(
  _price: number,
  _currency: string,
  locale?: string | 'es-AR'
): string {
  const options = {
    style: 'currency',
    currency: _currency,
  };
  return new Intl.NumberFormat(locale, options).format(_price);
}
