//input: obj, obj
//output: string

export const getDiff = (startDate, endDate) => {
  const diffInMs = Math.abs(endDate - startDate);

  const resDay = diffInMs / (1000 * 60 * 60 * 24);
  const resHours = diffInMs / (1000 * 60 * 60);
  const resMin = diffInMs / (1000 * 60);
  const resSec = diffInMs / 1000;

  return `${resDay}d ${resHours}h ${resMin}m ${resSec}s`;
};

const result = getDiff(
  new Date(2021, 8, 1, 13, 12, 0),
  new Date(2017, 5, 6, 10, 15, 0)
);

console.log(result);

const result2 = getDiff(new Date(), new Date('December, 17, 1995, 03:24:00'));
console.log(result2);
