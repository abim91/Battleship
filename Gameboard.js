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
    //for horizontal changes
        if(horizontalOrientation){
        
            if(checkSlots(x,y,shipObject.getLength(),horizontalOrientation)){
                
                for(let i = 0; i < shipObject.getLength() ; i++){
                    board[x][y] = false;
                    y++;
                 }
                return board;
            }
            
            return false;
        }
    //for vertical changes
        if(!horizontalOrientation){
            if(checkSlots(x,y,shipObject.getLength(),horizontalOrientation)){
                
                for(let i = 0; i < shipObject.getLength(); i++){
                    board[x][y] = false;
                    x++;
                 }
                return board;
            }
            
            return false;
        }
    }

    function checkSlots(x,y,length,horizontalOrientation){
        if(horizontalOrientation){
            
            for(let i = 0; i < length ; i++){ 
                if(y > 10){
                    return false;
                }
                y++;
            }

            return true;
        }

        if(!horizontalOrientation){
         
            for(let i = 0; i < length; i++){
                if(x > 10){
                    return false;
                }
                x++;
            }

            return true;
        }

        
    }


    let attack;
    function receiveAttack(x,y){
        if(!(board[x][y])){
            board[x][y] = "hit"
        }
        else{
            board[x][y] = "missed"
        }
        return board;
    }


    return {setShip, receiveAttack};
}

export {Gameboard}