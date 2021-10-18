const fs = require("fs");

const abilities = new Map();
let insertSql = "INSERT INTO abilities(abilityname, explanation) VALUES ";

fs.readFile("./abilities.txt", (err, data) => {
  if (err) {
    throw err;
  }

  const dataArr = data.toString().split("\n");

  dataArr.forEach((str, index) => {
    if (index % 2 === 0 && str.trim().length > 0) {
      abilities.set(str, dataArr[index + 1]);
    }
  });

  for (const [key, value] of abilities) {
    insertSql += `('${key}', '${value}'), `;
  }

  // remove last comma and space and add semicolon
  insertSql = insertSql.substring(0, insertSql.length - 2) + ";";

  // write to another file
  fs.writeFile("./insert_abilities.sql", insertSql, (err) =>
    console.error(err)
  );
});
