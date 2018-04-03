const question = {
  id: "0",
  type: "",
  questionText: {
    selfInPresent: "",
    selfInPast: "",
    otherInPresent: "",
    otherInPast: "",
    noTarget: "",  //			<--- Use if the question does not require a targeted text
  },
  options: [
    {
      id: "a", optionText: {
        noTarget: "", //		<--- Use if the option does not require a targeted text
      },
    },
    {
      id: "b", optionText: {
        selfInPresent: "",
        selfInPast: "",
        otherInPresent: "",
        otherInPast: "",
      },
    },
  ],
};
export default question;
