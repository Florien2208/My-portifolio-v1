import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly"; // Ensure this import is correct
import { Loader2 } from "lucide-react";

interface ScheduleCallProps {
  isDarkMode: boolean;
}

const ScheduleCall: React.FC<ScheduleCallProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showWidget, setShowWidget] = useState(false); // State to control the widget visibility
  const widgetRef = useRef<HTMLDivElement | null>(null); // Ref to the widget box

  const handleScheduleCall = async () => {
    setIsLoading(true);
    try {
      // Show the Calendly inline widget
      setShowWidget(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Error scheduling call. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle click outside the widget to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setShowWidget(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        onClick={handleScheduleCall}
        disabled={isLoading}
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors w-full sm:w-auto flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Opening Calendar...
          </>
        ) : (
          "Schedule Call"
        )}
      </button>

      {/* Render the InlineWidget conditionally */}
      {showWidget && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            ref={widgetRef}
            className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full max-h-[95%] items-center"
          >
            <InlineWidget url="https://calendly.com/mahorompakanyiflorien/30min" />
            {/* Optional: Button to close the widget */}
            <button
              onClick={() => setShowWidget(false)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCall;
