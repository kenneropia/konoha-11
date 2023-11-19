"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { QUESTION_LENGTH } from "@/utils/data";

export async function submitSingleQuestion(formData: FormData) {
  const questionIndex = formData.get("questionIndex") as unknown as string;
  const optionIndex = formData.get("optionIndex") as unknown as string;

  //  const answerCookie = cookies().get("answers")?.value;
  //  const answer = answerCookie && JSON.parse(answerCookie)[params?.questionIndex];

  const answerCookie = cookies().get("answers")?.value;
  const oldAnswers = answerCookie ? JSON.parse(answerCookie) : {};
  const newAnswers = { ...oldAnswers };
  newAnswers[Number(questionIndex) - 1] = +optionIndex + 1;
  // console.log(newAnswers);
  cookies().set("answers", JSON.stringify(newAnswers));

  if (+questionIndex >= QUESTION_LENGTH) {
    return redirect(`/result`);
  }

  return redirect(`/questions/${Number(questionIndex) + 1}`);
}
