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

  const diffDay = dayData2 - dayData1;
  const diffHours = hoursData2 - hoursData1;
  const diffMin = minData2 - minData1;
  const diffSec = secData2 - secData1;

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
 return `${endDate.getDate() - startDate.getDate()}d ${
    endDate.getHours() - startDate.getHours()
  }h ${endDate.getMinutes() - startDate.getMinutes()}m ${
    endDate.getSeconds() - startDate.getSeconds()
  }s`;
};*/

/*const getDiff = (startDate, endDate) => {
  let one_day = 1000 * 60 * 60 * 24;
  //timi in milisec
  let date1_ms = startDate.getTime();
  let date2_ms = endDate.getTime();
  //diff milisec
  let difference_ms = date2_ms - date1_ms;

  difference_ms = difference_ms / 1000;
  console.log(difference_ms);
  let seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  console.log(difference_ms);
  let minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms / 60;
  console.log(difference_ms);
  let hours = Math.floor(difference_ms % 24);
  let days = Math.floor(difference_ms /24);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};*/

export function getDiff(dateFuture, dateNow) {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;


  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
 

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;

  const seconds = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= seconds * 60;
  

  let difference = '';
  if (days > 0) {
    difference += days === 1 ? `${days}d` : `${days}d `;
  }

  difference +=
    hours === 0 || hours === 1 ? `${hours}h` : `${hours}h `;

  difference +=
    minutes === 0 || hours === 1 ? `${minutes}m` : `${minutes}m `;

  difference += seconds === 0 || hours === 1 ? `${seconds}s` : `${seconds}s `;

  return difference;
}
console.log(
  getDiff(new Date(2021, 8, 1, 13, 12, 0), new Date(2017, 5, 6, 10, 15, 0))
);

//test data
/*const result = getDiff(
  new Date(2021, 8, 1, 13, 12, 0),
  new Date(2017, 5, 6, 10, 15, 0)
);

console.log(result);

const result2 = getDiff(new Date(), new Date('December, 17, 1995, 03:24:00'));
console.log(result2);*/
