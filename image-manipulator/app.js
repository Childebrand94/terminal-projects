const sharp = require("sharp");
const prompt = require("prompt-sync")();

const getMetaData = async (file) => {
  try {
    const metaData = await sharp(file).metadata();
    console.log(metaData);
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
};

const file = prompt("Please enter the file path: ");
const width = Number(prompt("What is width: "));
const height = Number(prompt("What is height: "));
const output = prompt("What is the name of the new file: ");

sharp(file)
  .resize(width, height)
  .toFile(output)
  .then(() => {
    console.log("Image resizing successful.");
    getMetaData(output);
  })
  .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
  });
