import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="h-[50dvh] flex items-center justify-center">
      <AiOutlineLoading3Quarters size={24} className="animate-spin" />
      <span className="text-lg tracking-wider ml-4">Loading, please wait.</span>
    </div>
  );
}
