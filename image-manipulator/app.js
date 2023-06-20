const sharp = require("sharp");
const prompt = require("prompt-sync")();

// const file = prompt("Please enter the file path: ");

const getMetaData = async () => {
  try {
    const metaData = await sharp("images/underwater.png").metadata();
    console.log(metaData);
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
};

const output = await sharp("images/underwater.png").greyscale().toBuffer().toFile("image-manipulator");
