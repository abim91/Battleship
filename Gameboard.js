import {ship} from "./ship.js"
function Gameboard(){

    
    let board = [[true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true],
                 [true,true,true,true,true,true,true,true,true,true]
                ]
    
    
    function setShip(shipObject, x,y,horizontalOrientation){
        if(horizontalOrientation){
        
            if(checkSlots(x,y,shipObject.getLength(),horizontalOrientation)){
                
                for(let i = 0; i < shipObject.getLength(); i++){
                    board[x][y] = false;
                    y++;
                 }
                return board;
            }
            
            return false;


        }
    }

    function checkSlots(x,y,length,horizontalOrientation){
        if(horizontalOrientation){
            let y_value = y;
            let start = board[x][y];
            for(let i = 0; i < length; i++){
                if(!(board[x][y])){
                    console.log(board[x][y]);
                    return false;
                }
                y++;
            }

            return true;
        }
    }


    let attack;
    const receiveAttack = function(x,y){
        if(x && y){
            attack = true;
        }
        else{
            attack = false;
        }
    }


    return {setShip};
}

export {Gameboard}