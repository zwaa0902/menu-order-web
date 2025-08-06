"use client";
import { useSearchParams } from "next/navigation";
import { useMenu } from "@/context/MenuContext";
import CartIcon from "@/components/CartIcon";
import OrderItem from "@/components/OrderItem";

export default function MenuPageClient() {
  const { filteredOrders, updateOrderQuantity, filterOrders } = useMenu();
  const searchParams = useSearchParams();
  const tableNumber = searchParams.get("tableNumber") ?? "1";

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Bàn {tableNumber}</h1>
        <CartIcon />
      </div>

      <input
        type="text"
        placeholder="Tìm món..."
        onChange={(e) => filterOrders(e.target.value)}
        className="border rounded px-3 py-2 w-full mb-4"
      />

      <div className="grid grid-cols-2 gap-4">
        {filteredOrders.map((order) => (
          <OrderItem
            key={order.id}
            order={order}
            onUpdate={(q) => updateOrderQuantity(order.id, q)}
          />
        ))}
      </div>
    </div>
  );
}
