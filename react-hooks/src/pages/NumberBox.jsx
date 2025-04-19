import React from 'react';

const NumberBox = () => {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const numbers = [];
  for (let i = 0; i <= 100; i++) {
    numbers.push(i);
  }

  function getColor(num) {
    if (isPrime(num)) {
      return 'bg-green-500';
    } else if (num % 2 === 0) {
      return 'bg-blue-500';
    } else {
      return 'bg-red-500';
    }
  }
  let numberz = [];
  let totalOdd = [];
  let totalEven = [];
  let totalPrime = [];
  for (let i = 0; i <= 100; i++) {
    numberz.push(i);
    isPrime(i) ? totalPrime.push(i)
      : i % 2 === 0 ? totalEven.push(i)
        : totalOdd.push(i);
  }
  console.log(numberz);
  console.log(totalOdd);
  console.log(totalEven);
  console.log(totalPrime);





  return (
    <div className="grid grid-cols-10 gap-2 p-4">
      <h1>{`the total number here is ${numberz.length} and it has ${totalEven.length} numbers`}</h1>
      {numbers.map((num, index) => (
        <div
          key={index}
          className={`${getColor(num)} text-white p-2 rounded shadow text-center`}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default NumberBox;
