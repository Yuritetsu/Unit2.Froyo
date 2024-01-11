// prompt user to input flavors separated with commas
let orderInput = prompt(
    "Please enter your flavors separated with commas"
  );




const froyoObject = (orderInput) =>{
    const inputArr = orderInput.split(",").map(function (value){
    })
    const counter = {};
    inputArr.forEach(ele => {
        if (counter[ele]) {
            counter[ele] += 1;
        } else {
            counter[ele] = 1;
        }
    });
    console.log(orderInput);
    console.log(inputArr);
    return counter
}



console.table(froyoToObject(orderInput));

