/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { useMenu } from "@/context/MenuContext";
import { priceFormat } from "@/lib/price";
import { useRouter, useSearchParams } from "next/navigation";
import { MinusIcon, PlusIcon } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function ConfirmOrderClient() {
  const { orders, updateOrderQuantity } = useMenu();
  const router = useRouter();
  const searchParams = useSearchParams();
  const tableNumber = searchParams.get("tableNumber") ?? "1";

  const selectedItems = orders.filter((item) => item.quantity > 0);
  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log(selectedItems);
  const handleSubmit = () => {
    //TODO: POST order to API here if needed
    toast.success("Đã gửi đơn hàng!");
    router.push(`/success-order`);
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const order = orders.find((o) => o.id === id);
    if (order) {
      updateOrderQuantity(id, newQuantity);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 pb-2">
        <h1 className="text-2xl font-bold">Xác nhận đơn hàng - Bàn {tableNumber}</h1>
      </header>

      {selectedItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">
          Không có món nào trong đơn.
        </p>
      ) : (
        <>
          <main className="flex-1 overflow-y-auto px-4 space-y-4">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-lg shadow p-4"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                  {/* Use next/image or img */}
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-green-600 font-bold text-lg">
                    {priceFormat(item.price)}₫
                  </p>
                  <div className="mt-2 flex items-center space-x-2 w-max bg-gray-100 rounded-full px-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Math.max(0, item.quantity - 1)
                        )
                      }
                      disabled={item.quantity === 0}
                      aria-label="Giảm số lượng"
                      className="text-gray-600 disabled:opacity-40"
                    >
                      <MinusIcon size={15} />
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      aria-label="Tăng số lượng"
                      className="text-gray-600"
                    >
                      <PlusIcon size={15} />
                    </button>
                  </div>
                </div>
                <div className="ml-auto font-bold text-green-700 text-lg">
                  {priceFormat(item.price * item.quantity)}₫
                </div>
              </div>
            ))}
          </main>

          <footer className="sticky bottom-0 left-0 right-0 p-4 border-t border-gray-300">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Tổng cộng:</span>
              <span className="text-green-700">{priceFormat(total)}₫</span>
            </div>

            <Button className="w-full py-4" onClick={handleSubmit}>
              Gửi đơn
            </Button>
          </footer>
        </>
      )}
      <Toaster richColors position="top-center" />
    </div>
  );
}
