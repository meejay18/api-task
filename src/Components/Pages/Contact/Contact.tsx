import Flashcards from "../../ProductsCards/Flashcards";
import questions from "../../JSON/Questions.json";

const Contact = () => {
  return (
    <div className="w-[100%] h-[35rem] flex justify-center items-center bg-[gray]">
      <div className="w-[95%] grid gap-[10px] grid-cols-1 lg:grid-cols-3 h-[95%] bg-[green]  ">
        {questions.map((id, question, answer) => (
          <div>
            <Flashcards id={id} question={question} answer={answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

<div></div>;
