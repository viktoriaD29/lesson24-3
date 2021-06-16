//input: obj, obj
//output: string

//algo:
//1. зчитуємо потрібні данні з дати
//2. віднімаємо значення
//3. повертаємо строку у потрібному форматі

/*const getDiff = (startDate, endDate) => {
  const dayData1 = new Date(startDate).getDate();
  const hoursData1 = new Date(startDate).getHours();
  const minData1 = new Date(startDate).getMinutes();
  const secData1 = new Date(startDate).getSeconds();

  const dayData2 = new Date(endDate).getDate();
  const hoursData2 = new Date(endDate).getHours();
  const minData2 = new Date(endDate).getMinutes();
  const secData2 = new Date(endDate).getSeconds();

  const diffDay = dayData1 - dayData2;
  const diffHours = hoursData1 - hoursData2;
  const diffMin = minData1 - minData2;
  const diffSec = secData1 - secData2;

  return `${diffDay}d ${diffHours}h ${diffMin}m ${diffSec}s`;
};*/

/*export const getDiff = (startDate, endDate) => {
  const diff = new Date(new Date(endDate) - new Date(startDate));
  return `${diff.getDate()}d ${diff.getHours()}h ${diff.getMinutes()}m ${diff.getSeconds()}s`;
};*/

/*const getDiff = (startDate, endDate) => {
  const diff = new Date(startDate.getTime() - endDate.getTime());

  return `${diff.getDate()}d ${diff.getHours()}h ${diff.getMinutes()}m ${diff.getSeconds()}s`;
};*/

/*const getDiff = (startDate, endDate) => {
  const a = endDate.getDate() - startDate.getDate();
  const b = endDate.getHours() - startDate.getHours();
  const c = endDate.getMinutes() - startDate.getMinutes();
  const d = endDate.getSeconds() - startDate.getSeconds();

  return `${a}d ${b}h ${c}m ${d}s`;
};*/

export const getDiff = (startDate, endDate) => {
  let one_day = 1000 * 60 * 60 * 24;

  let date1_ms = startDate.getTime();
  let date2_ms = endDate.getTime();

  let difference_ms = date2_ms - date1_ms;

  difference_ms = difference_ms / 1000;
  let seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  let minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  let hours = Math.floor(difference_ms % 24);
  let days = Math.floor(difference_ms / 24);

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
