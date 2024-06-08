

export interface Order {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: Product[];
  PaymentType: string;
  TotalPrice?:number;
  User:User
}

interface Product {
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  AvailablePieces: number;
  ProductImg: string;
  Quantity: number;
}

export interface User {
  Id: string;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  RegisterDate: string;
}


