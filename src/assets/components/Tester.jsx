import React, { useState } from "react";

function Tester() {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };

  const handleInputBlur = () => {
    setIsInputVisible(false);
  };

  return (
    <div>
      {!isInputVisible && (
        <button onClick={handleButtonClick}>Show Input</button>
      )}
      {isInputVisible && (
        <input
          type="text"
          name=""
          id=""
          onBlur={handleInputBlur}
          className="border-2"
        />
      )}
    </div>
  );
}

export default Tester;
