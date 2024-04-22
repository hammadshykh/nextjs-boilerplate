const moment = require("moment");

// formate date funtion

export const formateDate = (date: Date) => {
 // Get the selected date from the date picker
 let selectedDate = new Date(date);

 // Format the date as YYYY-MM-DD
 let formattedDate = moment(selectedDate).format("YYYY-MM-DD");

 console.log(formattedDate); // Output: 2024-03-08

 return formattedDate;
};
