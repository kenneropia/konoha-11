import { generateAnswer } from "@/utils/generateAnswer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { imageMap } from "@/utils/data";

export default async function Page() {
  // const answerCookie = cookies().get("answers")?.value;
  // const answer =
  //   answerCookie && JSON.parse(answerCookie)[Number(params?.questionIndex) - 1];

  const answerCookie = cookies().get("answers")?.value;
  const answers: Record<string, number> =
    answerCookie && JSON.parse(answerCookie);
  if (!answers) {
    return redirect("questions/1");
  }
  const stat = generateAnswer(answers);

  const components: Array<JSX.Element> = [];
  for (const key in stat) {
    const name = stat[key][0];
    const point = stat[key][1];
    // console.log(key, imageMap[name], stat[key]);

    const compo = (
      <div key={key}>
        <Image
          className="w-auto h-auto"
          src={imageMap[name].path}
          width={"100"}
          height={"100"}
          alt={imageMap[name].path}
        />
        <p>
          {imageMap[name].name} | {point}
        </p>
      </div>
    );
    components.push(compo);
  }
  return (
    <main className="flex flex-col my-5 items-center justify-between">
      {components}
    </main>
  );
}
