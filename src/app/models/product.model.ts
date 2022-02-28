export interface ProductModelServer {
  id: Number;
  name: String;
  category: String;
  description: String;
  image: String;
  price: Number;
  quantity: any;
  images: String;
}

export interface serverResponse {
  count: number;
  products: ProductModelServer[];
}
