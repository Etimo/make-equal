import q0 from './form-questions/question-0';
import q1 from './form-questions/question-1';
import q2 from './form-questions/question-2';
import q3 from './form-questions/question-3';
import q4 from './form-questions/question-4';
import q5 from './form-questions/question-5';
import q6 from './form-questions/question-6';
import q7 from './form-questions/question-7';
import q8 from './form-questions/question-8';
import q9 from './form-questions/question-9';
import q10 from './form-questions/question-10';
import q11 from './form-questions/question-11';
import q12 from './form-questions/question-12';
import q13 from './form-questions/question-13';
import q14 from './form-questions/question-14';
import q15 from './form-questions/question-15';
import q16 from './form-questions/question-16';
import q17 from './form-questions/question-17';

/**
 * This list contains the two base form-form-questions that determine who the subject of the following form-form form-form-questions will be about,
 * and if the issue is ongoing or in the past.
 * (q0) The affected person is: "me" or "another person"
 * (q1) Present or past tense
 */
export const introductionQuestions = [
  q0, q1,
];

/**
 * This list is the source from which the targeted form-form form-form-questions will be created.
 * These form-form-questions are not directed at a target in themselves and therefore contain keys for the wording to match all five cases:
 * selfInPresent, selfInPast, otherInPresent, otherInPast and noTarget.
 * Some form-form-questions contain sub-options, these follow the same pattern.
 *
 * When the wording of a question doesn't require a target or tense the "noTarget" key is used.
 * eg. question.questionText[noTarget] = "Where?" or question.options[i].optionText[noTarget] = "Yes"
 *     question.options[i].subOptions[j].optionText[noTarget] = "some option"
 */
export const followupQuestions = [
  q2,
  // q3,
  q4,
  // q5, q6, q7,
  q8,
  // q9,
  // q10, q11, q12, q13, q14, q15, q16, q17,
];
