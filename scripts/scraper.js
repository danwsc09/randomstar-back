const fs = require("fs");

const url =
  "https://namu.wiki/w/%EB%9E%9C%EB%8D%A4%20%EB%8A%A5%EB%A0%A5%20%ED%81%AC%EB%9E%98%ED%94%84%ED%8A%B8(%ED%8C%8C%EC%9D%B4%EC%8D%AC)/%EB%8A%A5%EB%A0%A5%20%EB%A6%AC%EC%8A%A4%ED%8A%B8";

const puppeteer = require("puppeteer");
const specialChars = "☆★♡▷◀◇◈●▩";

(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  console.log("page");

  await page.goto(url, { waitUntil: "networkidle2" });
  console.log("goto");

  const data = await page.evaluate(() => {
    console.log("evaluating");
    const allH2Nodes = document.querySelectorAll('h2[class="wiki-heading"]');
    console.log(allH2Nodes);
    const abilities = [...allH2Nodes].map((h2) => h2.querySelector("span").id);
    const explanations = [...allH2Nodes].map(
      (h2) => h2.nextElementSibling.firstChild.firstChild.textContent
    );

    return {
      abilities,
      explanations,
    };
  });

  fs.writeFile("abilities.txt", "", (err) => {
    if (err) return console.error(err);
  });

  data.abilities.forEach((ability, index) => {
    if (ability.includes("(삭제)")) return;

    const abilityStr =
      (specialChars.includes(ability.substr(-1))
        ? ability.substring(0, ability.lastIndexOf(" "))
        : ability) + "\n";
    const explanationStr = data.explanations[index] + "\n";
    const writeStr = abilityStr + explanationStr;

    fs.appendFile("abilities.txt", writeStr, (err) => {
      if (err) return console.error(err);
    });
  });

  await browser.close();
})();

fs.readFile();
