
import { ship } from "./ship.js";
import { Gameboard } from "./Gameboard.js";





test("Test Ship's hasSunk Function",()=>{
    let Destroyer = ship();
    Destroyer.setLength(2)
    Destroyer.hit()
    Destroyer.hit();
    expect(Destroyer.hasSunk()).toBe(true);
})

test("Update Board for horizontal orientation",()=>{
  

    let expectedBoard = 
    [[false,false,false,false,false,true,true,true,true,true],
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
    console.log(gb.setShip(battle,0,0,true));
    expect(gb.setShip(battle,0,0,true)).toEqual(expectedBoard);

   
})

test("Update Board for horizontal orientation",()=>{
  

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

test("Update Board for horizontal orientation",()=>{
  

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

test("Update Board for horizontal orientation",()=>{
  

    
    let battle = ship()
    battle.setLength(11);

    let gb = Gameboard();
    expect(gb.setShip(battle,9,5,true)).toEqual(false);

})

test("update board for vertical orientation",()=>{
    let expectedBoard = [[false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true]
                ];
    let battle = ship();
    battle.setLength(5);

    let gb = Gameboard();
    expect(gb.setShip(battle,0,0,false)).toEqual(expectedBoard);



})

test("update board for vertical orientation",()=>{
    let expectedBoard = [[false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true],
                 [false,true,true,true,true,true,true,true,true,true]
                ];
    let battle = ship();
    battle.setLength(10);

    let gb = Gameboard();
    expect(gb.setShip(battle,0,0,false)).toEqual(expectedBoard);



})

test("update board for vertical orientation",()=>{
    
    let battle = ship();
    battle.setLength(5);

    let gb = Gameboard();
    expect(gb.setShip(battle,7,1,false)).toEqual(false);



})
test("update board for horizontal orientation",()=>{
    
    let battle = ship();
    battle.setLength(50);

    let gb = Gameboard();
    expect(gb.setShip(battle,7,7,true)).toEqual(false);



})