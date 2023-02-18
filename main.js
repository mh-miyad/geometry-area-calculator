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
let counter = 1;

function areaOne(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return 0.5 * a * b;
};
function ellipse(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return 3.1416 * a * b;
};

function areaTwo(num1, num2) {
  let a = parseInt(num1);
  let b = parseInt(num2);
  return a * b;
};

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
rhombusBtn.addEventListener('click', function () {
  let a = rhombusD1.value;
  let b = rhombusD2.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Triangle Value')
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
pentagonBtn.addEventListener('click', function () {
  let a = pentagonB.value;
  let b = pentagonX.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Triangle Value')
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
ellipseBtn.addEventListener('click', function () {
  let a = ellipseA.value;
  let b = ellipseB.value;
  if (a == '' || b == '') {
    alert('Please Enter Your Triangle Value')
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



const cards = document.querySelectorAll('.card-item'); // fix typo in query selector

for (const card of cards) {

  // add event listener for mouseover
  card.addEventListener('mouseover', function () {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });

  card.addEventListener('mouseout', function () {
    card.style.backgroundColor = '';
  });
}

// helper function to generate random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}