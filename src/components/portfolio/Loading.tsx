
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600 mx-auto" />
        <h2 className="mt-4 text-xl font-semibold text-white">Loading Portfolio...</h2>
      </div>
    </div>
  );
};

export default Loading;
