function generateBirthMonths() {
    const birthMonths = [];
  
    for (let i = 0; i < 50; i++) {
      const year = Math.floor(Math.random() * 2) + 1992;
      const month = Math.floor(Math.random() * 12) + 1;
      birthMonths.push({year, month});
    }
  
    return birthMonths;
  }
  
  function findSameMonth(birthMonths) {
    const sameMonth = {};
  
    for (const {year, month} of birthMonths) {
      if (sameMonth[month]) {
        sameMonth[month].push({year, month});
      } else {
        sameMonth[month] = [{year, month}];
      }
    }
    return sameMonth;
  }
  
  // Example usage
  const birthMonths = generateBirthMonths();
  console.log(`Birth months: ${JSON.stringify(birthMonths)}`);
  
  const sameMonth = findSameMonth(birthMonths);
  console.log(`Same month: ${JSON.stringify(sameMonth)}`);