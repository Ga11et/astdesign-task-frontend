export interface Product {
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  id: number;
}

async function fetch_products() {
  return $fetch<Product[]>('/api/products');
}

export const catalog_api = {
  fetch_products,
};
