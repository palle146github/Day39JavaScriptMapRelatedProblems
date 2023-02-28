function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function findMaxMin(dic) {
  let max = 0;
  let min = 10;
  let maxNum, minNum;
  
  for (const num in dic) {
    if (dic[num] > max) {
      max = dic[num];
      maxNum = num;
    }
    
    if (dic[num] < min) {
      min = dic[num];
      minNum = num;
    }
  }
  
  return [maxNum, minNum];
}

function main() {
  const dic = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
  };
  
  let maxNum, minNum;
  
  while (true) {
    const result = rollDice();
    dic[result.toString()]++;
    
    [maxNum, minNum] = findMaxMin(dic);
    
    console.log(`Rolled ${result}`);
    console.log(dic);
    
    if (dic[maxNum] === 10) {
      console.log(`The number ${maxNum} reached maximum times.`);
      console.log(`The number ${minNum} reached minimum times.`);
      break;
    }
  }
}

// Example usage
main();