
import { ship } from "./ship.js";
import { Gameboard } from "./Gameboard.js";




test("Test Ship's hasSunk Function",()=>{
    let Destroyer = ship();
    Destroyer.setLength(2)
    Destroyer.hit()
    Destroyer.hit();
    expect(Destroyer.hasSunk()).toBe(true);
})

test("Update Board",()=>{
  

    let expectedBoard = [[false,false,false,false,false,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]]

    let battle = ship()
    battle.setLength(5);

    let gb = Gameboard();
    expect(gb.setShip(battle,0,0,true)).toEqual(expectedBoard);

})

test("Update Board",()=>{
  

    let expectedBoard = [[true,true,true,true,true,false,false,false,false,false],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]]

    let battle = ship()
    battle.setLength(5);

    let gb = Gameboard();
    expect(gb.setShip(battle,0,5,true)).toEqual(expectedBoard);

})

test("Update Board",()=>{
  

    let expectedBoard = [[true,true,true,true,true,true,false,false,false,false],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]]

    let battle = ship()
    battle.setLength(5);

    let gb = Gameboard();
    expect(gb.setShip(battle,0,10,true)).toEqual(false);

})