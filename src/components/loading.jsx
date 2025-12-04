import { useEffect, useState } from "react";
import logo from "../assets/img/loga2.png";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
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
