//input: obj, obj
//output: string

export const getDiff = (startDate, endDate) => {
  const diffInMs = Math.abs(endDate - startDate);

  const second = 1000;
  const minute = second * 60;

  const hours = minute * 60;
  const day = hours * 24;

  const resDay = Math.floor(diffInMs / day);
  const resHours = Math.floor((diffInMs % day) / hours)
  const resMin = Math.floor((diffInMs % hours) / minute)
  const resSec = Math.floor((diffInMs % minute) / second)

  return `${resDay}d ${resHours}h ${resMin}m ${resSec}s`;
};

const result = getDiff(
  new Date(2021, 8, 1, 13, 12, 0),
  new Date(2021, 5, 6, 10, 15, 0)
);

console.log(result);

const result2 = getDiff(new Date(), new Date('December, 17, 1995, 03:24:00'));
console.log(result2);
