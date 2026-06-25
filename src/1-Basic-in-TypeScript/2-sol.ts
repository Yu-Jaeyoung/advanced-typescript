import type { Equal, Expect } from "..";

type OrderDetail = {
  orderId: string;
  quantity: number;
  price: number;
}

export const orderDetails: OrderDetail = JSON.parse(
  '{"orderId": "ORD456", "quantity": 3, "price": 29.99}'
);

type test = Expect<
  Equal<
    typeof orderDetails,
    {
      orderId: string;
      quantity: number;
      price: number;
    }
  >
>;