export function get_decimal_number(number: number, words: [string, string, string]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  const index = number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];
  return `${words[index]}`;
}

export function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
