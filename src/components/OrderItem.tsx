/* eslint-disable @next/next/no-img-element */
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
        <div className="flex items-center justify-between mt-2">
          <button onClick={() => onUpdate(order.quantity - 1)}>-</button>
          <span className="font-bold">{order.quantity}</span>
          <button onClick={() => onUpdate(order.quantity + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
