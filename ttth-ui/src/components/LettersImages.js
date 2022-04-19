// Exports an object {A: [example images of A...], B: [example images of B],...}
// Also exports LearnImages which is the images displayed on the learn tab
function importAll(r) {
  const images = [];
  r.keys().forEach((item, index) => { 
    images.push(r(item))  
  });
  return images;
}

function importAllMap(r) {
  const images = {};
  r.keys().forEach((item, index) => { 
    images[item.replace('./', '').replace('.jpeg','')] = r(item); 
  
  });
  return images;
}

const ImagesByLetter = {}
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
ImagesByLetter["A"] = importAll(require.context("../images/A", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["B"] = importAll(require.context("../images/B", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["C"] = importAll(require.context("../images/C", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["D"] = importAll(require.context("../images/D", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["E"] = importAll(require.context("../images/E", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["F"] = importAll(require.context("../images/F", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["G"] = importAll(require.context("../images/G", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["H"] = importAll(require.context("../images/H", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["I"] = importAll(require.context("../images/I", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["J"] = importAll(require.context("../images/J", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["K"] = importAll(require.context("../images/K", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["L"] = importAll(require.context("../images/L", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["M"] = importAll(require.context("../images/M", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["N"] = importAll(require.context("../images/N", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["O"] = importAll(require.context("../images/O", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["P"] = importAll(require.context("../images/P", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["Q"] = importAll(require.context("../images/Q", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["R"] = importAll(require.context("../images/R", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["S"] = importAll(require.context("../images/S", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["T"] = importAll(require.context("../images/T", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["U"] = importAll(require.context("../images/U", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["V"] = importAll(require.context("../images/V", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["W"] = importAll(require.context("../images/W", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["X"] = importAll(require.context("../images/X", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["Y"] = importAll(require.context("../images/Y", false, /\.(png|jpe?g|svg)$/));
ImagesByLetter["Z"] = importAll(require.context("../images/Z", false, /\.(png|jpe?g|svg)$/));

const LearnImages = importAllMap(require.context("../images/alphabet", false, /\.(png|jpe?g|svg)$/));


// ImagesByLetter[alphabet[i]] = importAll(require.context(`../images/${alphabet[i]}`, false, /\.(png|jpe?g|svg)$/));
// for (let i = 0; i < alphabet.length; i++) {
//   ImagesByLetter[alphabet[i]] = importAll(require.context(`../images/${alphabet[i]}`, false, /\.(png|jpe?g|svg)$/));
// }
// ImagesByLetter['a'] = importAll(require.context('../images/A/', false, /\.(png|jpe?g|svg)$/));
// console.log(ImagesByLetter)


export {ImagesByLetter, LearnImages};