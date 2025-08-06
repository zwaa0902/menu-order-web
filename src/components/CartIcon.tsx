"use client";
import { useMenu } from "@/context/MenuContext";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function CartIcon() {
  const { orders } = useMenu();
  const router = useRouter();
  const count = orders.filter((o) => o.quantity > 0).length;

  const handleClick = () => {
    if (count === 0) {
      alert("Giỏ hàng trống");
    } else {
      router.push("/confirm-order");
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </button>
      {count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1",
            "flex items-center justify-center",
            "h-4 w-4 rounded-full",
            "bg-red-500 text-white text-[10px] font-medium"
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
}
