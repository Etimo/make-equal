import q0 from './question-0';
import q1 from './question-1';
import q2 from './question-2';
import q3 from './question-3';
import q4 from './question-4';
import q5 from './question-5';
import q6 from './question-6';
import q7 from './question-7';
import q8 from './question-8';
import q9 from './question-9';
import q10 from './question-10';
import q11 from './question-11';
import q12 from './question-12';
import q13 from './question-13';
import q14 from './question-14';
import q15 from './question-15';
import q16 from './question-16';
import q17 from './question-17';

/**
 * This list contains the two base questions that determine who the subject of the following form questions will be about,
 * and if the issue is ongoing or in the past.
 * (q0) The affected person is: "me" or "another person"
 * (q1) Present or past tense
 */
export const introductionQuestions = [
  q0, q1,
];

/**
 * This list is the source from which the targeted form questions will be created.
 * These questions are not directed at a target in themselves and therefore contain keys for the wording to match all five cases:
 * selfInPresent, selfInPast, otherInPresent, otherInPast and noTarget.
 * Some questions contain sub-options, these follow the same pattern.
 *
 * When the wording of a question doesn't require a target or tense the "noTarget" key is used.
 * eg. question.questionText[noTarget] = "Where?" or question.options[i].optionText[noTarget] = "Yes"
 *     question.options[i].subOptions[j].optionText[noTarget] = "some option"
 */
export const followupQuestions = [
  q2, q3, q4, q5, q6, q7,
  q8, q9, q10, q11, q12, q13, q14, q15, q16, q17,
];
