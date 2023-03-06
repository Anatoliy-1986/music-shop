var wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

var points = {
  HarryPotter: 500,
  CedricDiggory: 750,
  RonaldWeasley: 100,
  HermioneGranger: 1270,
};

var hufflepuff = wizards.reduce((newArr: string[], wizard) => {
  if (wizard.house === "Hufflepuff") {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);

//   console.log(hufflepuff);

var hufflepuffList =
  "<ul>" +
  wizards.reduce(function (html, wizard) {
    if (wizard.house === "Hufflepuff") {
      html += "<li>" + wizard.name + "</li>";
    }
    return html;
  }, "") +
  "</ul>";

//   console.log(hufflepuffList);

var wizardsWithPoints = wizards.reduce(function (arr: string[], wizard) {
  // Получаем значение для объекта points, удалив пробелы из имени //волшебника
  var key = wizard.name.replace("  ", " ");

  // Если у волшебника есть очки, устанавливаем значение,
  // иначе устанавливаем 0.
  if (points[key]) {
    wizard.points = points[key];
  } else {
    wizard.points = 0;
  }

  // Добавляем объект wizard в новый массив.
  arr.push(wizard);

  // Возвращаем массив.
  return arr;
}, []);

var wizardsAsAnObject = wizards.reduce(function (obj, wizard) {
  // Получаем значение ключа для объекта points, удалив пробелы из имени
  //волшебника
  var key = wizard.name.replace("  ", " ");

  // Если у волшебника есть очки, устанавливаем значение,
  // иначе устанавливаем 0.
  if (points[key]) {
    wizard.points = points[key];
  } else {
    wizard.points = 0;
  }

  // Удаляем свойство name
  delete wizard.name;

  // Добавляем значение wizard в новый объект
  obj[key] = wizard;

  // Возвращаем массив
  return obj;
}, {});

console.log(wizardsAsAnObject);

export {};
