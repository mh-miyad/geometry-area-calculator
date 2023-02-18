const triangleBtn = document.getElementById('triangle-btn');
const triangleBvalue = document.getElementById('tri-b-value');
const triangleHvalue = document.getElementById('tri-h-value');
const parallelogramBvalue = document.getElementById('par-b-value');
const parallelogramHvalue = document.getElementById('par-h-value');
const parallelogramBtn = document.getElementById('par-btn');
const rectangularWvalue = document.getElementById('rec-w');
const rectangularIvalue = document.getElementById('rec-i');
const rectangularBtn = document.getElementById('rec-btn');
const rhombusD1 = document.getElementById('rh-d1');
const rhombusD2 = document.getElementById('rh-d2');
const rhombusBtn = document.getElementById('rh-btn');
const pentagonX = document.getElementById('pen-x');
const pentagonB = document.getElementById('pen-b');
const pentagonBtn = document.getElementById('pen-btn');
const ellipseA = document.getElementById('ellipse-a');
const ellipseB = document.getElementById('ellipse-b');
const ellipseBtn = document.getElementById('ellipse-btn');
const resultShow = document.getElementById('result-show');
//  Counter use fo listing result of this 
let counter = 1;
// One function use for 3 types of value it return  
function areaOne(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return 0.5 * a * b;
};
//  ellipse area calculate , it created for that cause it has Pi = 3.1416 
function ellipse(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return 3.1416 * a * b;
};
//  other area calculate use these function
function areaTwo(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return a * b;
};

// 01

parallelogramBtn.addEventListener('click', function () {
  let a = parallelogramBvalue.value;
  let b = parallelogramHvalue.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Parallelogram Value')
  }
  else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let parallelogram = areaTwo(a, b);
    let tr = document.createElement('tr');
    tr.innerHTML = `   <td class="px-3 py-5">${counter}</td>
    <td class="px-3 py-5">Parallelogram</td>
    <td class="px-3 py-5">${parallelogram}cm<sup>2</sup></td>
    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td>`;
    resultShow.appendChild(tr);
    counter++;
  }
});
// 02 
rectangularBtn.addEventListener('click', function () {
  let a = rectangularWvalue.value;
  let b = rectangularIvalue.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Parallelogram Value')

  } else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let rectangular = areaTwo(a, b);
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-3 py-5">${counter}</td>
                    <td class="px-3 py-5">Rectangular</td>
                    <td class="px-3 py-5">${rectangular}cm<sup>2</sup></td>
                    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td>`;
    resultShow.appendChild(tr);

    counter++;

  }

});
// 03
triangleBtn.addEventListener('click', function () {
  let a = triangleBvalue.value;
  let b = triangleHvalue.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Triangle Value')
  } else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let triangle = areaOne(a, b);
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-3 py-5">${counter}</td>
                    <td class="px-3 py-5">Triangle</td>
                    <td class="px-3 py-5">${triangle}cm<sup>2</sup></td>
                    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td> `;
    resultShow.appendChild(tr);
    counter++;
  }
});
// 04
rhombusBtn.addEventListener('click', function () {
  let a = rhombusD1.value;
  let b = rhombusD2.value;
  if (a == '' || b == '') {
    alert('Please Enter Your rhombus Value')
  } else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let rhombus = areaOne(a, b);
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-3 py-5">${counter}</td>
                    <td class="px-3 py-5">Rhombus</td>
                    <td class="px-3 py-5">${rhombus}cm<sup>2</sup></td>
                    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td> `;
    resultShow.appendChild(tr);
    counter++;
  }
});
// 05
pentagonBtn.addEventListener('click', function () {
  let a = pentagonB.value;
  let b = pentagonX.value;
  if (a == '' || b == '') {
    alert('Please Enter Your pentagon Value')
  } else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let pentagon = areaOne(a, b);
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-3 py-5">${counter}</td>
                    <td class="px-3 py-5">Pentagon</td>
                    <td class="px-3 py-5">${pentagon}cm<sup>2</sup></td>
                    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td> `;
    resultShow.appendChild(tr);
    counter++;
  }
});
// 06
ellipseBtn.addEventListener('click', function () {
  let a = ellipseA.value;
  let b = ellipseB.value;
  if (a == '' || b == '') {
    alert('Please Enter Your ellipse Value')
  } else if (a < 0 || b < 0) {
    alert('Please Enter Positive Value')
  } else {
    let ellipseResult = parseFloat(ellipse(a, b)).toFixed(2);
    let tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-3 py-5">${counter}</td>
                    <td class="px-3 py-5">Ellipse</td>
                    <td class="px-3 py-5">${ellipseResult}cm<sup>2</sup></td>
                    <td class="px-3 py-5"><button class="cursor-pointer px-4 rounded-lg text-sm py-3 bg-blue-600 text-white hover:bg-blue-500">convert</button></td> `;
    resultShow.appendChild(tr);
    counter++;
  }
});

//  Here Using javascript bg color change randomly 

const cards = document.querySelectorAll('.card-item');
//  i am using For Of loop to catch every tag that i use 
for (const card of cards) {


  card.addEventListener('mouseover', function () {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });

  card.addEventListener('mouseout', function () {
    card.style.backgroundColor = '';
  });
}


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}