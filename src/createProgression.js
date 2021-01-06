const createProgression = (
  startProgression = 1,
  progressionStep = 2, endProgression = 5,
) => {
  const progressionArr = [];
  let currentNum = startProgression;
  progressionArr[0] = currentNum;
  for (let i = 1; i < endProgression; i += 1) {
    progressionArr[i] = currentNum + progressionStep;
    currentNum += progressionStep;
  }
  return progressionArr;
};

export default createProgression;
