//input: obj, obj
//output: string

//algo:
//1. зчитуємо потрібні данні з дати
//2. віднімаємо значення
//3. повертаємо строку у потрібному форматі

const getDiff = (startDate, endDate) => {
  let one_day = 1000 * 60 * 60 * 24;
  //timi in milisec
  let date1_ms = startDate.getTime();
  let date2_ms = endDate.getTime();
  //diff milisec
  let difference_ms = date2_ms - date1_ms;

  difference_ms = difference_ms / 1000;

  let seconds = Math.abs(Math.floor(difference_ms % 60));
  difference_ms = difference_ms / 60;

  let minutes = Math.abs(Math.floor(difference_ms % 60));
  difference_ms = difference_ms / 60;

  let hours = Math.abs(Math.floor(difference_ms % 24));
  let days = Math.abs(Math.floor(difference_ms / 24));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

//test data
const result = getDiff(
  new Date(2021, 8, 1, 13, 12, 0),
  new Date(2017, 5, 6, 10, 15, 0)
);

console.log(result);

const result2 = getDiff(new Date(), new Date('December, 17, 1995, 03:24:00'));
console.log(result2);
