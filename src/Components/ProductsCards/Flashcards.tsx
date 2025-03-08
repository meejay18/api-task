const Flashcards = ({ id, question, answer }: any) => {
  return (
    <div className="min-h-[250px] flex justify-center items-center rounded-md bg-[white]">
      {question}
    </div>
  );
};

export default Flashcards;
