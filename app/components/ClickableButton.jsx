"use client";

import { useState } from "react";

function ClickableButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        setCount((c) => c + 1);
      }}
    >
      click ({count})
    </button>
  );
}

export default ClickableButton;
