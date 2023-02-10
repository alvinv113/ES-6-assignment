// Function to find the count of
// digits in N
function numberOfDigit(N) {
  let digit = 0;

  // Calculate the count
  // of digits in N
  while (N > 0) {
    // Update digit
    digit++;

    // Update N
    N = Math.floor(N / 10);
  }
  return digit;
}

// Function to rotate the digits of N by K
function rotateNumberByK(N, K) {
  // Stores count of digits in N
  let X = numberOfDigit(N);

  K = ((K % X) + X) % X;

  let left_no = Math.floor(N / Math.floor(Math.pow(10, X - K)));

  N = N % Math.floor(Math.pow(10, X - K));

  // Stores count of digits in left_no
  let left_digit = numberOfDigit(left_no);

  N = N * Math.floor(Math.pow(10, left_digit)) + left_no;

console.log(N);
}

let N = 12345,
  K = 7;

// Function Call
rotateNumberByK(N, K);
