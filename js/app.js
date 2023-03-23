/**
        Program Akisi
0-Basla
1-DOM a ulasacak degiskenler icin selector fonksiyonunun olusturlmasi
2-Degiskeninlerin tanimlanmasi
3-Element hesaplayan fonksiyonun yazilmasi
4-Burclari hesaplayan fonksiyonun yazilmasi
5-Sonucu konsola yazdiracak fonksiyonun olusturulmasi
6-Event isleminin tanimlanmasi
7-Bitir
*/

/**
 * Varaibles
 */
const button = getQuerySelector("#button");
const inputYears = getQuerySelector("#years-input");
const result = getQuerySelector("#result");
const stem = ["Wood", "Fire", "Earth", "Metal", "Water"];
const branch = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Roostar",
  "Dog",
  "Pig",
];
const ratKeyFeatures = "Rat: quick-witted, resourceful, versatile, kind.";
const oxKeyFeatures = "Ox: diligent, dependable, strong, determined.";
const tigerKeyFeatures = "Tiger: quick-witted, resourceful, versatile, kind.";
const rabbitKeyFeatures = "Rabbit: quiet, elegant, kind, responsible.";
const dragonKeyFeatures = "Dragon: confident, intelligent, enthusiastic.";
const snakeKeyFeatures = "Snake: enigmatic, intelligent, wise.";
const horseKeyFeatures = "Horse: animated, active, energetic.";
const goatKeyFeatures = "Goat: calm, gentle, sympathetic.";
const monkeyKeyFeatures = "Monkey: sharp, smart, curious.";
const roosterKeyFeatures = "Rooster: observant, hardworking, courageous.";
const dogKeyFeatures = "Dog: lovely, honest, prudent.";
const pigKeyFeatures = "Pig: compassionate, generous, diligent.";
let zodiacFeatures;
let ChineZodiacElements;
let ChineZodiac;

/**
 * Search button event for zodiac calculate
 */
button.addEventListener("click", function () {
  let inputValue = inputYears.value;
  if (inputValue == "" || inputValue < 1900 || inputValue > 2121) {
    alert("Please enter a date of birth between 1900 and 2121");
  } else {
    zodiacCalculate(inputValue);
    elementCalculate(inputValue);
    innerhtml();
  }
});
/**
 * Query selector function
 */
function getQuerySelector(pIdAndClass) {
  return document.querySelector(pIdAndClass);
}
/**
 * this function for innerhtml
 */
function innerhtml() {
  result.innerHTML = `Zodiac: ${ChineZodiac} <br> Element: ${ChineZodiacElements}
        <br><br> Chine Zodiac: <span class="text-warning">${ChineZodiac} ${ChineZodiacElements}</span> <br><br><br> 
        Personality traits of your zodiac sign <br> <span class="text-warning">${zodiacFeatures}</span>
    `;
}
/**
 * Element finder function by year of birth  ("Wood","Fire", "Earth", "Metal", "Water)
 * @param {*} item
 */
function elementCalculate(pInputValue) {
  if (pInputValue % 10 == 4 || pInputValue % 10 == 5) {
    ChineZodiacElements = stem[0];
  } else if (pInputValue % 10 == 6 || pInputValue % 10 == 7) {
    ChineZodiacElements = stem[1];
  } else if (pInputValue % 10 == 8 || pInputValue % 10 == 9) {
    ChineZodiacElements = stem[2];
  } else if (pInputValue % 10 == 0 || pInputValue % 10 == 1) {
    ChineZodiacElements = stem[3];
  } else if (pInputValue % 10 == 2 || pInputValue % 10 == 3) {
    ChineZodiacElements = stem[4];
  }
}
/**
 * The function of finding Chinese zodiac signs by year of birth ("Rat","Ox", "Tiger",
 * "Rabbit", "Dragon","Snake","Horse", "Sheep", "Monkey", "Roostar", "Dog", "Pig")
 * @param {*} pInputValue
 */
function zodiacCalculate(pInputValue) {
  if (pInputValue % 12 == 4) {
    ChineZodiac = branch[0];
    zodiacFeatures = ratKeyFeatures;
  } else if (pInputValue % 12 == 5) {
    ChineZodiac = branch[1];
    zodiacFeatures = oxKeyFeatures;
  } else if (pInputValue % 12 == 6) {
    ChineZodiac = branch[2];
    zodiacFeatures = tigerKeyFeatures;
  } else if (pInputValue % 12 == 7) {
    ChineZodiac = branch[3];
    zodiacFeatures = rabbitKeyFeatures;
  } else if (pInputValue % 12 == 8) {
    ChineZodiac = branch[4];
    zodiacFeatures = dragonKeyFeatures;
  } else if (pInputValue % 12 == 9) {
    ChineZodiac = branch[5];
    zodiacFeatures = snakeKeyFeatures;
  } else if (pInputValue % 12 == 10) {
    ChineZodiac = branch[6];
    zodiacFeatures = horseKeyFeatures;
  } else if (pInputValue % 12 == 11) {
    ChineZodiac = branch[7];
    zodiacFeatures = goatKeyFeatures;
  } else if (pInputValue % 12 == 0) {
    ChineZodiac = branch[8];
    zodiacFeatures = monkeyKeyFeatures;
  } else if (pInputValue % 12 == 1) {
    ChineZodiac = branch[9];
    zodiacFeatures = roosterKeyFeatures;
  } else if (pInputValue % 12 == 2) {
    ChineZodiac = branch[10];
    zodiacFeatures = dogKeyFeatures;
  } else if (pInputValue % 12 == 3) {
    ChineZodiac = branch[11];
    zodiacFeatures = pigKeyFeatures;
  }
}
