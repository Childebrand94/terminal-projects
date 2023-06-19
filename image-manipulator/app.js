const sharp = require("sharp");
const prompt = require("prompt-sync")();

const file = prompt("Please enter the file path: ");

const getMetaData = async () => {
  try {
    const metaData = sharp(file).metaData();
    return metaData;
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
};

getMetaData();
