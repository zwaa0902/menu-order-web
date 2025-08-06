"use client";
import { OrderModel } from "@/models/order_model";
import { priceFormat } from "@/lib/price";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  order: OrderModel;
  onUpdate: (quantity: number) => void;
}

export default function OrderItem({ order, onUpdate }: Props) {
  const [isAnimating, setAnimating] = useState(false);

  const triggerAnimation = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white">
      <img
        src={order.imageUrl}
        alt={order.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold">{order.name}</h3>
        <p className="text-green-600 font-bold">{priceFormat(order.price)}</p>

        {order.quantity > 0 ? (
          <div className="flex items-center justify-between mt-2">
            <button onClick={() => onUpdate(order.quantity - 1)}>-</button>
            <span className="font-bold">{order.quantity}</span>
            <button onClick={() => onUpdate(order.quantity + 1)}>+</button>
          </div>
        ) : (
          <Button className="w-full mt-2" onClick={() => onUpdate(1)}>
            Thêm
          </Button>
        )}
      </div>

      {order.quantity > 0 && isAnimating && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full text-xs">
          ✓
        </div>
      )}
    </div>
  );
}
