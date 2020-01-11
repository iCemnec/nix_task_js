let students = [
    {
        "firstName":"Max",
        "surName":"Sokolskyi",
        "age":18,
        "sex":"М",
        "isVegetarian":false,
        "langCount":3
    },{
        "firstName":"Iryna",
        "surName":"Petrushkina",
        "age":30,
        "sex":"Ж",
        "isVegetarian":false,
        "langCount":3
    },{
        "firstName":"Roma",
        "surName":"Slisarenko",
        "age":22,
        "sex":"М",
        "isVegetarian":false,
        "langCount":3
    },{
        "firstName":"Yaroslav",
        "surName":"Kovalev",
        "age":18,
        "sex":"М",
        "isVegetarian":false,
        "langCount":3
    },{
        "firstName":"Tymur",
        "surName":"Zhukotynskyi",
        "age":19,
        "sex":"М",
        "isVegetarian":true,
        "langCount":3
    },{
        "firstName":"Boris",
        "surName":"Kolomoiets",
        "age":19,
        "sex":"М",
        "isVegetarian":false,
        "langCount":3
    },{
        "firstName":"Artur",
        "surName":"Lavrinovich",
        "age":19,
        "sex":"М",
        "isVegetarian":false,
        "langCount":3
    }
];

localStorage.setItem('studentStorage', JSON.stringify(students));
const studentArray = JSON.parse(localStorage.getItem('studentStorage'));

const arrayAge = studentArray.map((item) => item.age);
const arrayLangCount = studentArray.map((item) => item.langCount);
const arraySex = studentArray.map((item) => item.sex);

const avgAge = (arrayAge.reduce(
    (accum, currentValue) => accum + currentValue
) / arrayAge.length).toFixed(2);

const maxLangCount = Math.max(...arrayLangCount);

const countSex = arraySex.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
}, {});

window.onload = function () {
    document.getElementById('avgResult').textContent = avgAge;
    document.getElementById('maxLanguage').textContent = JSON.stringify(maxLangCount);
    document.getElementById('countPerson').textContent = JSON.stringify(countSex);
};

function checkAvgLength() {
    let text = textForCheck.value;
    let temp = text.split(/[.,\/ -:;<>'"{}*\n]/).filter((el) => el);

    let avgWord = temp.reduce(
        (accum, currentValue) => accum + currentValue.length, 0
    ) / temp.length;

    avgText.textContent = `Средняя длина слова: ${avgWord}`;
    return avgWord;
}
