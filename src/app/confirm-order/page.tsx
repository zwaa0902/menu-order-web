import { Suspense } from "react";
import ConfirmOrderClient from "./ConfirmOrderClient";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function ConfirmOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="p-4">
          <LoadingSpinner text="Đang tải..." />
        </div>
      }
    >
      <ConfirmOrderClient />
    </Suspense>
  );
}
