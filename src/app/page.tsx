import { Suspense } from "react";
import MenuPageClient from "./menu/MenuPageClient";

export default function Home() {
  return (
    <Suspense fallback={<div className="p-4">Đang tải thực đơn...</div>}>
      <MenuPageClient />
    </Suspense>
  );
}
