import { useState } from "react";

const Flashcards = ({ flashObj }: any) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id: any) => {
    setSelectedId(id);
  };
  return (
    <div
      className={
        flashObj.id === selectedId
          ? "min-h-[300px] flex justify-center items-center rounded-md bg-[red]"
          : "min-h-[300px] flex justify-center items-center rounded-md bg-[white]"
      }
      onClick={() => handleClick(flashObj.id)}
    >
      <p>{flashObj.id === selectedId ? flashObj.answer : flashObj.question}</p>
    </div>
  );
};

export default Flashcards;
