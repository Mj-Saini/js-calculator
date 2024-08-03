let backGround = document.createElement("div");
let calculator = document.createElement("div");
let display = document.createElement("div");
let displayValue = document.createElement("p");
let keyParent = document.createElement("div");

let allKeys = [
  "x",
  "ce",
  "*",
  "/",
  "1",
  "2",
  "3",
  "-",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "%",
  ".",
  "0",
  "00",
  "=",
];

allKeys.forEach((keys) => {
  let newKey = document.createElement("button");
  newKey.innerHTML = keys;
  keyParent.append(newKey);

  newKey.addEventListener("click", () => {
    let printOne = displayValue.innerHTML.slice(-1);
    if (keys === "ce") {
      displayValue.innerHTML = "";
    } else if (
      displayValue.innerHTML === "" &&
      (keys === "+" || keys === "*" || keys === "/" || keys === "%")
    ) {
      displayValue.innerHTML = "";
    } else if (keys === "x") {
      displayValue.innerHTML = displayValue.innerHTML.slice(0, -1);
    } else if (keys === "=") {
      if (displayValue.innerHTML == "") {
        displayValue.innerHTML = "";
      } else {
        let expression = displayValue.innerHTML.replace(/X/g, "*");
        displayValue.innerHTML = eval(expression);
      }
    } else if (keys === "ac") {
      displayValue.innerHTML = "";
    } else {
      let lastChar = displayValue.innerHTML.slice(-1);
      if (
        (lastChar === "+" ||
          lastChar === "-" ||
          lastChar === "*" ||
          lastChar === "/" ||
          keys === "%" ||
          keys === ".") &&
        (keys === "+" ||
          keys === "-" ||
          keys === "*" ||
          keys === "/" ||
          keys === "%" ||
          keys === ".")
      ) {
        displayValue.innerHTML = displayValue.innerHTML.slice(0, -1) + keys;
      } else {
        displayValue.innerHTML += keys;
      }
    }
  });

  // KEYS STYLING
  Object.assign(newKey.style, {
    backgroundColor: "#ffd1dc",
    width: "23%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
    fontSize: "20px",
    borderRadius: "20px",
  });
});

// STYLING FOR THIS CALCULATOR

document.body.style.margin = "0px";
Object.assign(backGround.style, {
  backgroundColor: "#ffd1dc",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
Object.assign(calculator.style, {
  backgroundColor: "#ffd1d",
  width: "400px",
  minHeight: "500px",
  border: "2px solid #fff",
  padding: "10px",
  borderRadius: "20px",
});
Object.assign(display.style, {
  backgroundColor: "#fff",
  width: "400px",
  minHeight: "80px",
  border: "2px solid #fff",
  borderRadius: "15px",
  margin: "0",
  textAlign: "end",
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
});
Object.assign(displayValue.style, {
  backgroundColor: "#fff",
  width: "400px",
  margin: "0",
  textAlign: "end",
  borderRadius: "15px",
  padding: "10px",
});
Object.assign(keyParent.style, {
  backgroundColor: "#fff",
  height: "420px",
  border: "2px solid #fff",
  borderRadius: "15px",
  marginTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "5px",
  padding: "5px",
  justifyContent: "space-between",
});

document.body.appendChild(backGround);
backGround.appendChild(calculator);
calculator.appendChild(display);
display.appendChild(displayValue);
calculator.appendChild(keyParent);
