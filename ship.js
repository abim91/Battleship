function ship() {
  let shipLength;
  let numberOfHits = 0;

  const hit = function () {
    // updates number of hits to the ship
    numberOfHits++;
  };

  let setLength = function (length) {
    shipLength = length;
  };

  let getLength = function () {
    return shipLength - numberOfHits;
  };

  let hasSunk = function () {
    return getLength() == 0;
  };
  return { hasSunk, hit, setLength, getLength };
}

export { ship };
