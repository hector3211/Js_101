let year = prompt("Enter a year: ");

function leapYear(year_) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return alert("its a leap year!");
      } else {
        return alert("NOT a leap year!");
      }
    } else {
      return alert("a leap year!");
    }
  } else {
    return alert("NOT a leap year!");
  }
}

leapYear(year);
