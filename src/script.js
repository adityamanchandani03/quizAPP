
// const url = "https://api.jsonserve.com/Uw5CrX";


// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// data

const object = {
  questions: [
    {
      id: 1,
      description:
        "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is : ",
      level: "medium",
      options: [
        {
          id: 13379,
          description: "5'UUUU3'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13380,
          description: "3'UUUU5'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13381,
          description: "5'AAAU3'",
          is_correct: true,
          unanswered: false,
        },
        {
          id: 13382,
          description: "3'AAAU5'",
          is_correct: false,
          unanswered: false,
        },
      ],
    },
    {
      id: 2,
      description:
        "Avery, MacLeod and Mc Carty used the S(virulent) and R (avirulent) strains of streptococcus pneumoniae. They isolated and purified protein, DNA, RNA from the bacteria and treated them with related enzymes. They concluded that :",
      level: "high",
      options: [
        {
          id: 13271,
          description: "DNA was transforming agent",
          is_correct: true,
          unanswered: false,
        },
        {
          id: 13272,
          description: "RNA was transforming agent",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13273,
          description: "Protein was transforming agent",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13274,
          description: "All are correct",
          is_correct: false,
          unanswered: false,
        },
      ],
    },
    {
      id: 3,
      description:
        "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is : ",
      level: "high",
      options: [
        {
          id: 13379,
          description: "5'UUUU3'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13380,
          description: "3'UUUU5'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13381,
          description: "5'AAAU3'",
          is_correct: true,
          unanswered: false,
        },
        {
          id: 13382,
          description: "3'AAAU5'",
          is_correct: false,
          unanswered: false,
        },
      ],
    },
    {
      id: 4,
      description:
        "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is : ",
      level: "medium",
      options: [
        {
          id: 13379,
          description: "5'UUUU3'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13380,
          description: "3'UUUU5'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13381,
          description: "5'AAAU3'",
          is_correct: true,
          unanswered: false,
        },
        {
          id: 13382,
          description: "3'AAAU5'",
          is_correct: false,
          unanswered: false,
        },
      ],
    },
    {
      id: 5,
      description:
        "If the base sequence in DNA is 5' AAAT 3' then the base sequence in mRNA is : ",
      level: "low",
      options: [
        {
          id: 13379,
          description: "5'UUUU3'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13380,
          description: "3'UUUU5'",
          is_correct: false,
          unanswered: false,
        },
        {
          id: 13381,
          description: "5'AAAU3'",
          is_correct: true,
          unanswered: false,
        },
        {
          id: 13382,
          description: "3'AAAU5'",
          is_correct: false,
          unanswered: false,
        },
      ],
    },
  ],
};
// data closed

const quiz = document.querySelector("#quizContainer");
let elements;
let questionCount = 0;
let answerArray;
let answers = [];
let score=0;
let correcAns = [];
let Results = document.querySelector("#Results");

object.questions.forEach((e) => {
  //  console.log(e.options);
  e.options.forEach((ele) => {
    // console.log(ele.is_correct);
    if (ele.is_correct == true) {
      correcAns.push(ele.description);
    }
  });
});

function createChild(
  child,
  parent,
  tagName,
  text,
  attName,
  attribute,
  ...classes
) {
  child = document.createElement(tagName);
  
  child.setAttribute(attName, attribute);
  const classe = classes;
  classe.forEach((e) => {
    child.classList.add(e);
  });
  child.innerHTML = text;

  parent.appendChild(child);
  
  return child;
}
function compareArrays(arr1, arr2) {
  let score = 0;
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].trim() === arr2[i].trim()) {
          score++;
      }
  }
  return score;
}


function createQuiz(questionNo, question, options, level) {

  let quizBox  ;
    quizBox = createChild(quizBox,quiz,'div','',"bg-white",
      "shadow-lg",
      "rounded-lg",
      "p-6",
      "w-full",
      "max-w-xl",
     "border-2",
      "border-gray-600")
  let  quizSection1 
   quizSection1 = createChild(quizSection1,quizBox,'div','',null,null,"flex", "justify-between", "items-center", "mb-4")
  let child;
  child = createChild(
    child,
    quizSection1,
    "span",
    "Question",
    "text-lg",
    "font-semibold"
  );

  let childNode;
  childNode = createChild(childNode, child, "span", `  ${questionNo + 1}/${object.questions.length}`);

  let btnNext;
  btnNext = createChild(
    btnNext,
    quizSection1,
    "button",
    "Next",
    "id",
    "NextBtn",
    "px-4",
    "py-2",
    "bg-blue-500",
    "text-white",
    "rounded-lg",
    "hover:bg-blue-600"
  );
  btnNext.addEventListener("click", (e) => {
    if (answerArray) {
        answers.push(answerArray); // Store the selected answer
    } else {
        answers.push("No Answer"); // Handle unanswered questions
    }

    if (questionCount < object.questions.length - 1) {
        questionCount++;
        e.target.parentNode.parentNode.remove();
        createQuiz(
            questionCount,
            object.questions[questionCount].description,
            [
                `${object.questions[questionCount].options[0].description}`,
                `${object.questions[questionCount].options[1].description}`,
                `${object.questions[questionCount].options[2].description}`,
                `${object.questions[questionCount].options[3].description}`,
            ],
            object.questions[questionCount].level
        );
    } else {
        score = compareArrays(correcAns, answers); // Calculate final score
        console.log("Final Score:", score);
        e.target.parentNode.parentNode.remove();
        Results.classList.remove("hidden");
        quiz.classList.add("hidden");
        Res(); 
    }
});

  //    Next div for question
  let questionDiv;
  questionDiv = createChild(
    questionDiv,
    quizBox,
    "div",
    "",
    "flex",
    "justify-between",
    "items-center",
    "mb-3"
  );

  let questionHead;
  questionHead = createChild(
    questionHead,
    questionDiv,
    "h2",
    question,
    "id",
    "question",
    "text-xl",
    "font-semibold"
  );

  let questionLevel;

  questionLevel = createChild(
    questionLevel,
    questionDiv,
    "span",
    level,
    "id",
    "level",
    "px-3",
    "py-1",
    "bg-yellow-500",
    "text-white",
    "text-sm",
    "rounded-lg"
  );

  // Options crreation

  let optionDiv;
  optionDiv = createChild(
    optionDiv,
    quizBox,
    "div",
    "",
    "id",
    "options",
    "flex",
    "flex-col",
    "gap-2"
  );

  const optArray = [];
  options.forEach((e, i) => {
    let option;

    option = createChild(
      option,
      optionDiv,
      "button",
      e,
      "id",
      `option${i + 1}`,
      "option-btn",
      "px-4",
      "py-2",
      "bg-gray-200",
      "rounded-lg",
      "hover:bg-gray-300"
    );

    optArray.push(option);
  });

  optArray.forEach((e) => {
    e.addEventListener("click", (element) => {
        answerArray = element.target.innerHTML.trim(); // Store selected answer
    });
});


  return quizBox;
}

function Replay() {
  createQuiz(
    questionCount,
    object.questions[questionCount].description,
    [
      ` ${object.questions[questionCount].options[0].description}`,
      ` ${object.questions[questionCount].options[1].description}`,
      ` ${object.questions[questionCount].options[2].description}`,
      ` ${object.questions[questionCount].options[3].description}`,
    ],
    object.questions[questionCount].level
  );
}

let reStart = document.querySelector("#reStartBtn");
let reStart1 = document.querySelector("#reStartBtn1");

reStart.addEventListener("click", (e) => {
  // Results.classList.add("hidden");
  window.location.reload(); 
});
reStart1.addEventListener("click", (e) => {
  reStart1.classList.add("hidden");
  quiz.classList.remove("hidden");
  quiz.classList.add("flex");
  Replay();
});
function Res() {
  console.log("Final Score:", score);
  document.getElementById("Score").textContent = `Your Score: ${score} / ${object.questions.length}`;

  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  object.questions.forEach((item, index) => {
      const questionCard = document.createElement("div");
      questionCard.classList.add("bg-gray-50", "p-4", "rounded-lg", "shadow-md");

      questionCard.innerHTML = `
          <p class="text-lg font-semibold">Q${index + 1}: ${item.description}</p>
          <p class="text-green-600 font-medium">Correct Answer: ${correcAns[index]}</p>
          <p class="text-${correcAns[index] === answers[index] ? 'green' : 'red'}-600 font-medium">
              Your Answer: ${answers[index]}
          </p>
           <p class="text-gray-700 italic">${item.description}</p>
      `;

      resultsContainer.appendChild(questionCard);
  });
}

