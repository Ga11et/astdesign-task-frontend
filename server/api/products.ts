import { generateFakeProduct } from '~/utils/generate';

export default defineEventHandler((event) => {
  const products = [];

  for (let index = 0; index < 12; index++) {
    const product = generateFakeProduct();
    products.push(product);
  }

  return products;
});
