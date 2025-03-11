import { faker } from '@faker-js/faker';

const path = {
  catalog: '/catalog',
  products: '/products',
};

interface Product {
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  id: number;
}

export const generateFakeProduct = (): Product => {
  const hasOldPrice = faker.datatype.boolean();

  const newPrice = faker.commerce.price({ min: 100, max: 100000 });
  const oldPrice = hasOldPrice ? +newPrice + +faker.commerce.price({ min: 10, max: 10000 }) : undefined;

  return {
    id: faker.seed(),
    image: faker.image.url(),
    newPrice: Number(newPrice),
    oldPrice: oldPrice ? Math.round(Number(oldPrice) * 100) / 100 : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    url: path.products + '/' + faker.number.int({ min: 10, max: 10000 }),
  };
};
