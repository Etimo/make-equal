import {UntargetedQuestions} from "./tmp/FormQuestionLists";

/**
 * The combination of the first two questions determine which target and tempus to use for the questions
 * 0a1a selfInPresent , 0a1b selfInPast, 0b1a otherInPresent, 0b1b otherInPast
 * */
export const generateQuestionListForTarget = function (targetInTime) {
  let questionsForTarget = [];
  for (let i in UntargetedQuestions) {
    const questionSourceObject = UntargetedQuestions[i];
    try {
      let question = {
        id: questionSourceObject.id,
        type: questionSourceObject.type,
        text: matchTextForTargetInTime(targetInTime, questionSourceObject.questionText),
        options: getQuestionTextAndOptionsForTarget(targetInTime, questionSourceObject.options)
      };
      questionsForTarget.push(question);
    } catch (e) {
      console.log(e);
    }
  }
  return questionsForTarget;
};

const getQuestionTextAndOptionsForTarget = function (targetInTime, questionOptions) {
  if (targetInTime && questionOptions) {
    let options = [];
    // Add the containing options of the questions with text directed at targetInTime
    if (Array.isArray(questionOptions)) {
      for (let i in questionOptions) {
        if (questionOptions[i].id) {
          options.push({
            id: questionOptions[i].id,
            text: matchTextForTargetInTime(targetInTime, questionOptions[i].optionText)
          });
        } else {
          throw new Error(`An option for the question is missing the ID property: ${questionOptions[i]}`);
        }
      }
    } else {
      throw new Error("The options object sent in from the question source object is not an array.");
    }
    return options;
  } else {
    throw new Error(`targetInTime: '${targetInTime ? 'OK' : targetInTime}' 
    options: '${questionOptions ? 'OK' : questionOptions}'`);
  }
};

const matchTextForTargetInTime = function (target, textObject) {
  return textObject[target] ? textObject[target] : textObject["noTarget"];
};
