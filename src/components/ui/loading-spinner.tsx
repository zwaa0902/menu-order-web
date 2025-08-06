export default function LoadingSpinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin" />
      {text && <span className="text-gray-500">{text}</span>}
    </div>
  );
}
