import * as tesseract from "node-tesseract-ocr";
import fs from "fs";
const config = {
  lang: "kor",
  oem: 1,
  psm: 3,
};

// const img = fs.readFileSync("./src/public/test.png");
const img = "./src/public/test.png";
tesseract
  .recognize(img, config)
  .then((text: string) => {
    console.log("Result:", text);
  })
  .catch((error: any) => {
    console.log(error.message);
  });
