
import { Link } from "react-router-dom";
import img404 from "../assets/notfound.svg";
function Not() {
  return (
    <main className="flex justify-center items-center">
      <img src={img404} className="h-[80vh]" alt="404" />
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          className="border w-min whitespace-nowrap rounded-md hover:ring p-2 my-2 bg-slate-800 text-white font-roboto"
          to="/"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}

import { useState, useEffect } from "react";

const OfflineNotice = () => {
  return <p>You are offline currently</p>;
};

const NotFound = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return <>{isOnline ? <Not></Not> : <OfflineNotice />}</>;
};

export default NotFound;
