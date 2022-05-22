const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const createListOfDates = ():string[] => {
  const result:string[] = [];
  const today = new Date(Date.now());

  const dateIndex = new Date('2022-5-1');
  while (today >= dateIndex) {
    const dateString = `${dateIndex.getDate()} ${months[dateIndex.getMonth()]}`
    result.push(dateString);
    dateIndex.setDate(dateIndex.getDate() + 1);
  }

  console.log(result);
  return result;
}

export const getDayOfWeek = () => {
  const today = new Date(Date.now());
  return days[today.getDay()];
}

export const getDateOfWeek = () => {
  const today = new Date(Date.now());
  return `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
}