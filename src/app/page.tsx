import { ModeToggle } from "@/components/ModeToggle";
import SliderComponent from "@/components/SliderComponent";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-10 right-10">
        <ModeToggle />
      </div>
      {/* Blurry Blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Blob 1 */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 dark:bg-blue-600/60 blur-[100px] rounded-full opacity-50"></div>
        {/* Blob 2 */}
        <div className="absolute top-40 right-16 w-96 h-96 bg-pink-400 dark:bg-pink-600/60 blur-[150px] rounded-full opacity-50"></div>
        {/* Blob 3 */}
        <div className="absolute bottom-20 right-2/4 w-80 h-80 bg-yellow-400 dark:bg-yellow-600/60 blur-[130px] rounded-full opacity-50"></div>
      </div>

      {/* Slider Component */}
      <SliderComponent />
    </div>
  );
}
