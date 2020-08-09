// falsy:
// ""
// 0
// undefined
// null
// NuN
// truthy:
// " "
// "0"
// []
const name = 12;
if (name || name == 0) {
  console.log("condition is true");  
}
else{
    console.log("condition is false");
}