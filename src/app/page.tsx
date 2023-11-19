import { redirectToQuestions } from "@/actions/redirectToQuestions";

export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between p-24 space-y-3">
      <p>
        Explore the vibrant world of the Konoha 11! Immerse yourself in the
        unique personalities and diverse abilities of Naruto&lsquo;s beloved
        characters. Answer engaging questions to discover which Konoha 11
        member&lsquo;s traits resonate with you. Uncover your ninja affinity and
        learn more about these iconic characters in this interactive and fun
        experience!
      </p>
      <form action={redirectToQuestions}>
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 text-lg rounded focus:outline-none hover:bg-orange-600"
        >
          Take the test
        </button>
      </form>
    </main>
  );
}
