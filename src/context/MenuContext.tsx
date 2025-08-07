// src/context/MenuContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { OrderModel } from "@/models/order_model";

interface MenuContextProps {
  orders: OrderModel[];
  filteredOrders: OrderModel[];
  updateOrderQuantity: (id: string, quantity: number) => void;
  filterOrders: (term: string) => void;
  clearOrders: () => void;
}

const initialOrders: OrderModel[] = [
  new OrderModel({
    id: "1",
    name: "Trà đá",
    price: 5000,
    imageUrl: "./images/tea.jpg",
    quantity: 0,
  }),
  new OrderModel({
    id: "2",
    name: "Nước sấu",
    price: 10000,
    imageUrl: "/images/tea.jpg",
    quantity: 0,
  }),
  // add more items here...
];

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<OrderModel[]>(initialOrders);
  const [filteredOrders, setFilteredOrders] =
    useState<OrderModel[]>(initialOrders);

  const updateOrderQuantity = (id: string, quantity: number) => {
    setOrders((prev) =>
      prev.map((item) => (item.id === id ? item.copyWith({ quantity }) : item))
    );
    setFilteredOrders((prev) =>
      prev.map((item) => (item.id === id ? item.copyWith({ quantity }) : item))
    );
  };

  const filterOrders = (term: string) => {
    const lower = term.toLowerCase();
    setFilteredOrders(
      orders.filter((item) => item.name.toLowerCase().includes(lower))
    );
  };

  const clearOrders = () => {
    setOrders(prev => 
      prev.map(item => item.copyWith({ quantity: 0 }))
    );
    setFilteredOrders(prev => 
      prev.map(item => item.copyWith({ quantity: 0 }))
    );
  };

  return (
    <MenuContext.Provider
      value={{ 
        orders, 
        filteredOrders, 
        updateOrderQuantity, 
        filterOrders, 
        clearOrders 
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within MenuProvider");
  return context;
};
