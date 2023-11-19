import { questionPoints } from "./data";

// export const generateAnswer = (answers: Record<string, number>) => {
//   const membersObject: Record<string, number> = {
//     Naruto: 0,
//     Shikamaru: 0,
//     Hinata: 0,
//     Sasuke: 0,
//     Sakura: 0,
//     Ino: 0,
//     Choji: 0,
//     Kiba: 0,
//     Shino: 0,
//     Rock: 0,
//     Neji: 0,
//   };
//   for (const key in answers) {
//     // console.log(`ANSWER: ${questions[key].question}`);
//     // const start = performance.now();

//     const { options } = questionPoints[+key];
//     for (let j = 0; j < options.length; j++) {
//       const item = options[j];
//       if (answers[key] == item.index) {
//         console.log(`${answers[key]}:${JSON.stringify(item)}`);
//         membersObject[item.name] += 1;
//       }
//       // else {
//       //   console.log(`NON_HIT:${++answers[key]}:${JSON.stringify(item)}`);
//       // }
//       // console.log(membersObject[item.name]);
//     }
//     // const end = performance.now();

//     // console.log(end - start);
//   }
//   return membersObject;
// };

export const generateAnswer = (answers: Record<string, number>) => {
  const membersObject: Record<string, number> = {
    Naruto: 0,
    Shikamaru: 0,
    Hinata: 0,
    Sasuke: 0,
    Sakura: 0,
    Ino: 0,
    Choji: 0,
    Kiba: 0,
    Shino: 0,
    Rock: 0,
    Neji: 0,
  };

  for (const key in answers) {
    const { options } = questionPoints[+key];
    for (let j = 0; j < options.length; j++) {
      const item = options[j];
      if (answers[key] == item.index) {
        membersObject[item.name] += 1;
      }
    }
  }

  // Convert membersObject to an array of key-value pairs
  const membersArray = Object.entries(membersObject);

  // Sort the array based on the values in descending order
  membersArray.sort((a, b) => b[1] - a[1]);
  //   console.log(membersArray);
  // Convert the sorted array back to an object
  const sortedMembersObject = Object.fromEntries(membersArray);

  return membersArray;
};
