"use client";
import { questions } from "@/utils/data";
import { useState } from "react";

interface IOptionState {
  questionIndex: number | null;
  optionIndex: number | null;
}

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<IOptionState>({
    questionIndex: null,
    optionIndex: null,
  });
  return (
    <main className="flex flex-col items-center">
      {questions.map((item, index) => {
        return (
          <SingleQuestion
            setSelectedOption={setSelectedOption}
            questionData={item}
            index={index}
            key={index}
          />
        );
      })}
    </main>
  );
}

const SingleQuestion = ({
  questionData,
  index: questionIndex,
  setSelectedOption,
}: {
  questionData: (typeof questions)[0];
  index: number;
  setSelectedOption: (arg0: IOptionState) => void;
}) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { valueAsNumber, dataset } = event.target;
    setSelectedOption({
      questionIndex: dataset.questionAttribute as unknown as number,
      optionIndex: valueAsNumber,
    });
  };
  const key = `${questionIndex}`;
  return (
    <div className="flex flex-col w-4/12 my-2">
      <p>{questionData.question}</p>

      <div>
        {questionData.options.map((item, optionIndex) => {
          return (
            <p key={optionIndex}>
              <input
                type="radio"
                name={key}
                id={`${optionIndex}`}
                value={optionIndex}
                data-question-attribute={questionIndex}
                onChange={handleOptionChange}
              ></input>{" "}
              <label htmlFor={`${optionIndex}`}>{item}</label>
            </p>
          );
        })}
      </div>
    </div>
  );
};
