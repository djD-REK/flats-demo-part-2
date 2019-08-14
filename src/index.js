import "./styles.css";

const cards = [["♠️", "♣️"], ["♥️", "♦️", ["🃏", ["🎴"], "🀄️", ["👁‍"]]]];

console.log(cards.flat(Infinity)); // Infinity is a variable in global scope
// result: ["♠️", "♣️", "♥️", "♦️", "🃏", "🎴", "🀄️", "👁‍"]

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
