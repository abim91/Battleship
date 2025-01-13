
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
    let battle = ship()
    battle.setLength(5);

    let expectedBoard = 
    [[battle,battle,battle,battle,battle,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]]

  

    let gb = Gameboard();
    console.log(gb.setShip(battle,0,0,true));
    expect(gb.setShip(battle,0,0,true)).toEqual(expectedBoard);

   
})

test("Update Board for horizontal orientation",()=>{
    let battle = ship()
    battle.setLength(5);

    let expectedBoard = [[true,true,true,true,true,battle,battle,battle,battle,battle],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]]

   

    let gb = Gameboard();
    expect(gb.setShip(battle,0,5,true)).toEqual(expectedBoard);

})

test("Update Board for horizontal orientation",()=>{
    let battle = ship()
    battle.setLength(5);

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
    let battle = ship();
    battle.setLength(5);
    let expectedBoard = [[battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true]
                ];
    

    let gb = Gameboard();
    expect(gb.setShip(battle,0,0,false)).toEqual(expectedBoard);



})

test("update board for vertical orientation",()=>{
    let battle = ship();
    battle.setLength(10);
    let expectedBoard = [[battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true],
                 [battle,true,true,true,true,true,true,true,true,true]
                ];
    

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

//place something in the grid, them attack each of the coordinate
test("Test if a boat is hit by the missle",()=>{
    let battleShip = ship();
    battleShip.setLength(5);
    let expectedBoard = [["hit","hit","hit","hit","hit",true,true,true,true,true],
    ["missed",true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]
   ]
    

    let gb = Gameboard();
    gb.setShip(battleShip,0,0,true);
    gb.receiveAttack(battleShip,0,1);
    gb.receiveAttack(battleShip,0,2);
    gb.receiveAttack(battleShip,0,3);
    gb.receiveAttack(battleShip,0,4);
    gb.receiveAttack(battleShip,1,0)
    expect(gb.receiveAttack(battleShip,0,0)).toEqual(expectedBoard);

})

test("Test hit function for a shipS",()=>{
    let battleShip = ship();
    battleShip.setLength(5);
    
    

    let gb = Gameboard();
    gb.setShip(battleShip,0,0,true);
    gb.receiveAttack(battleShip,0,0)
    gb.receiveAttack(battleShip,0,1);
    gb.receiveAttack(battleShip,0,2);
    gb.receiveAttack(battleShip,0,3);
    gb.receiveAttack(battleShip,0,4);
    gb.receiveAttack(battleShip,1,0)
    expect(battleShip.hasSunk()).toEqual(true);

})

test("Test hit function for a ships",()=>{
    let battleShip = ship();
    battleShip.setLength(5);
    let expectedBoard = [["hit",battleShip,battleShip,battleShip,battleShip,true,true,true,true,true],
    ["missed",true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true],
    [true,true,true,true,true,true,true,true,true,true]
   ]
    

    let gb = Gameboard();
    gb.setShip(battleShip,0,0,true);
   
   
    gb.receiveAttack(battleShip,1,0)
    expect( gb.receiveAttack(battleShip,0,0)).toEqual(expectedBoard);

})