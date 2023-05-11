export const calcMean = (entries) => {
  let sum = 0;
  for (let i = 0; i < entries.length; i++) {
    sum = entries[i] + sum;
  }
  return (sum / entries.length).toFixed(3);
};

export const calcMedian = (entries) => {
  var concat = entries;
  concat = concat.sort(function (a, b) {
    return a - b;
  });
  var length = concat.length;

  if (length % 2 == 1) {
    return concat[length / 2 - 0.5];
  } else {
    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
};

export const calcMode = (entries) => {
  let obj = {};
  for (let i = 0; i < entries.length; i++) {
    if (!obj[entries[i]]) {
      obj[entries[i]] = 0;
    }
    obj[entries[i]] += 1;
  }

  let arr = Object.keys(obj),
    greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] > greatest) {
      greatest = obj[arr[i]];
    }
  }
  const mode = arr.find((key) => obj[key] === greatest);
  return mode;
};

export const gammaCalculator = (ash, hue, magnesium) => {
  return ((Number(ash) * Number(hue)) / Number(magnesium)).toFixed(3);
};
