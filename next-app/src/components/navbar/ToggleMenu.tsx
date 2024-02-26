import { useState } from 'react';

export const ToggleMenu = () => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const handleTogglemenu = () => {
    setExpanded(!isExpanded);
    document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        document.querySelector("#header nav")?.classList.toggle("hidden");
  };

  return (
    <>
      <div onClick={handleTogglemenu} className='flex md:hidden cursor-pointer'>
        {isExpanded ? 'X' : '☰'}
      </div>
    </>
  );
};
