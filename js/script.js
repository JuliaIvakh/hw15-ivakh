const userArr = [1, 2, 3, -1, -2, -3];

function positiveArr(arr) {
  const newArr = [];
  if (arr.length != 0) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        newArr.push(arr[i]);
      } else if (arr[i] < 0) {
        newArr.push();
      }
    }
    if (newArr.length != 0) {
      console.log(newArr);
    } else {
      alert("the NEW array is empty");
    }
  } else {
    alert("the array is empty");
  }
}

positiveArr(userArr);
