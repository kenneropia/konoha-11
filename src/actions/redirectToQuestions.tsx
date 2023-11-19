"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function redirectToQuestions(formData: FormData) {
  const object = {};
  cookies().set("answers", JSON.stringify(object));

  return redirect(`/questions/1`);
}
