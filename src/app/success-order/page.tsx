"use client";

import { Button } from "@/components/ui/button";
import FireworkAnimation from "@/components/FireworkAnimation";
import { useRouter } from "next/navigation";
import { useMenu } from "@/context/MenuContext";

export default function SuccessOrderPage() {
  const router = useRouter();
  const { clearOrders } = useMenu();
  
  const handleBackToMenu = () => {
    clearOrders();
    router.push('/');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <main className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto">
        <div className="relative w-full max-w-md">
       
          <div className="relative z-10 w-full bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="h-55 -mt-16 -mx-8 mb-4 overflow-hidden">
              <div className="pt-8">
                <FireworkAnimation />
                </div>
            </div>
            <h1 className="text-2xl font-extrabold text-green-700 mb-4">
              Đơn hàng thành công!
            </h1>
            <p className="text-gray-700 mb-6">
              Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Đơn hàng của bạn đã được
              gửi thành công và đang được xử lý.
            </p>
            
            <Button 
              onClick={handleBackToMenu}
              className="w-full py-6 text-lg font-semibold"
            >
              Về trang chủ
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
