
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // console.log("Incremented to ", (fromN, toN));
  if (toN === fromN) {
    // console.log((fromN, toN), `= to ${toN} incrementation ends`)
    return fromN; //last thing to call to stack, and first to pop off of it.
  }
    let number = sum(fromN, toN - 1); //2 here

    number += toN; //toN is the one that was called to stack and is now being popped.
    return number;

}

module.exports = sum;


console.log(sum(2, 5));
2
