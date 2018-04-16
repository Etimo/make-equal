import {introductionQuestions, followupQuestions} from "./FormQuestionLists";

/**
 * The combination of the first two form-form-questions determine which target and tempus to use for the form-form-questions
 * 0a1a selfInPresent , 0a1b selfInPast, 0b1a otherInPresent, 0b1b otherInPast
 * */
export const generateQuestionListForTarget = function (targetInTime) {
  let questionsForTarget = [];
  for (let i in followupQuestions) {
    const questionSourceObject = followupQuestions[i];
    try {
      let question = {
        id: questionSourceObject.id,
        type: questionSourceObject.type,
        text: matchTextForTargetInTime(targetInTime, questionSourceObject.questionText),
        options: getQuestionTextAndOptionsForTarget(targetInTime, questionSourceObject.options)
      };
      questionsForTarget.push(question);
    } catch (e) {
      console.log(followupQuestions[i]);
      console.log(e);
    }
  }
  return questionsForTarget;
};

const getQuestionTextAndOptionsForTarget = function (targetInTime, questionOptions) {
  if (targetInTime && questionOptions) {
    let options = [];
    // Add the containing options of the form-form-questions with text directed at targetInTime
    if (Array.isArray(questionOptions)) {
      for (let i in questionOptions) {
        let option = {};
        let subOptions = [];
        if (questionOptions[i].id) {
          if (questionOptions[i].subOptions && questionOptions[i].subOptions.length > 0) {
            for (let j in questionOptions[i].subOptions) {
              subOptions.push({
                id: questionOptions[i].subOptions[j].id,
                text: matchTextForTargetInTime(targetInTime, questionOptions[i].subOptions[j].optionText)
              });
            }
          }
          option = {
            id: questionOptions[i].id,
            text: matchTextForTargetInTime(targetInTime, questionOptions[i].optionText)
          };
          if (subOptions && subOptions.length > 0) {
            option.subOptions = subOptions;
          }
          options.push(option);
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
export const getIntroductionQuestions = () => introductionQuestions;
