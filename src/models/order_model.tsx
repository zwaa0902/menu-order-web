export class OrderModel {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;

  constructor({
    id,
    name,
    price,
    imageUrl,
    quantity,
  }: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }

  static fromJson(json: any): OrderModel {
    return new OrderModel({
      id: json.id,
      name: json.name,
      price: json.price,
      imageUrl: json.imageUrl,
      quantity: json.quantity,
    });
  }

  toJson(): Record<string, any> {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      imageUrl: this.imageUrl,
      quantity: this.quantity,
    };
  }

  copyWith({
    id,
    name,
    price,
    imageUrl,
    quantity,
  }: {
    id?: string;
    name?: string;
    price?: number;
    imageUrl?: string;
    quantity?: number;
  }): OrderModel {
    return new OrderModel({
      id: id ?? this.id,
      name: name ?? this.name,
      price: price ?? this.price,
      imageUrl: imageUrl ?? this.imageUrl,
      quantity: quantity ?? this.quantity,
    });
  }

  updateQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
  }
}
