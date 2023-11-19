"use server";
import { submitSingleQuestion } from "@/actions/submitSingleQuestion";
import { QUESTION_LENGTH, questions } from "@/utils/data";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IOptionState {
  questionIndex: number | null;
  optionIndex: number | null;
}

export default async function Page({
  params,
}: {
  params: { questionIndex: string };
}) {
  const answerCookie = cookies().get("answers")?.value;
  const answer =
    answerCookie && JSON.parse(answerCookie)[Number(params?.questionIndex) - 1];

  const IsFirst = +params.questionIndex === 1;
  const IsLast = +params.questionIndex === QUESTION_LENGTH;

  const questionData = questions[Number(params?.questionIndex) - 1];
  if (!questionData) {
    return redirect("/questions/1");
  }
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col w-4/12 my-2">
        <h3>Question #{params.questionIndex}</h3>
        <p>{questionData.question}</p>

        <form action={submitSingleQuestion}>
          <input
            type="text"
            className="hidden"
            name="questionIndex"
            defaultValue={params.questionIndex}
          />
          {questionData.options.map((item, optionIndex) => {
            return (
              <p key={optionIndex}>
                <input
                  type="radio"
                  name="optionIndex"
                  value={optionIndex}
                  id={`${optionIndex}`}
                  required
                  defaultChecked={answer === +optionIndex}
                ></input>{" "}
                <label htmlFor={`${optionIndex}`}>{item}</label>
              </p>
            );
          })}
          <div className="flex space-x-2">
            <a
              href={`/questions/${+params.questionIndex - 1}`}
              className={`bg-orange-500 text-white px-6 py-2 text-lg rounded ${
                IsFirst && "opacity-20 pointer-events-none "
              } focus:outline-none hover:bg-orange-600`}
            >
              Prev
            </a>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 text-lg rounded focus:outline-none hover:bg-orange-600"
            >
              {IsLast ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
