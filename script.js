var dateDiffInDays = function (date1, date2) {
  //   write your code here
	
	let date1inMS=Date.UTC();
	let date2inMS=date2.getTime();

	let differenceinMS = Math.abs(date2inMS-date1inMS);

	let differenceinDays = Math.ceil(differenceinDays/(1000*3600*24));
	return differenceinDays;
};

// // Do not change the code below.
const date1 = new Date.prompt("Enter Start Date.");
const date2 = new Date.prompt("Enter End Date.");
alert(dateDiffInDays(date1, date2));


