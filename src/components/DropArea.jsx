import { useState } from "react";

const DropArea = ({onDrop}) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      className={
        showDrop
          ? `bg-gray-500 text-white w-[90%] h-auto m-2 rounded-md p-2 flex justify-between cursor-grab taskCard opacity-5`
          : `opacity-1`
      }
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={()=>{
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e)=>e.preventDefault()}
    >
      DropArea
    </div>
  );
};

export default DropArea;
