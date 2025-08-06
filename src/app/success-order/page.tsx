"use client";

import FireworkAnimation from "@/components/FireworkAnimation";

export default function SuccessOrderPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../images/bg-success-2.png')" }}
    >
      {/* Firework animation on top */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <FireworkAnimation />
      </div>

      {/* Content box */}
      <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-extrabold text-green-700 mb-4">
          Đơn hàng thành công!
        </h1>
        <p className="text-gray-700 mb-8">
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi. Đơn hàng của bạn đã được
          gửi thành công.
        </p>
      </div>
    </div>
  );
}
