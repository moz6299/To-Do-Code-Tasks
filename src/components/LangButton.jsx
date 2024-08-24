import React, { useState } from "react";
import "./LangButton.css";

const LangButton = ({ tagname, handleClick }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    handleClick(tagname);
    setActive((prev) => !prev);
  };

  return (
    <div className="langbut">
      <button
        className={active ? "activebut" : "btn"  }
        type="button"
        onClick={handleActive}
        
      >
        {tagname}
      </button>
    </div>
  );
};

export default LangButton;
