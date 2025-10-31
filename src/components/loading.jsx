import { useEffect, useState } from "react";
import logo from "../assets/img/loga2.png"; // apna logo

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // 4 sec baad band hoga
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="clip-wrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
}

export default Loader;
