const PLAYERONE = document.getElementById('p1');
const PLAYERTWO = document.getElementById('p2');
const CELL = document.querySelectorAll('.cell');
const CELLONE = document.querySelector('.one')
const CELLTWO = document.querySelector('.two')
const CELLTHREE = document.querySelector('.three')
const CELLFOUR = document.querySelector('.four')
const CELLFIVE = document.querySelector('.five')
const CELLSIX = document.querySelector('.six')
const CELLSEVEN = document.querySelector('.seven')
const CELLEIGHT = document.querySelector('.eight')
const CELLNINE = document.querySelector('.nine')

const board = [
    ["","",""],
    ["","",""],
    ["","",""]
];

function playerTwoNameChecker() {
    let playerTwoName = prompt('Please select a name for player two');
    if (playerTwoName != "") {
        PLAYERTWO.textContent = playerTwoName;
        PLAYERTWO.style.color = 'blue'
        PLAYERONE.style.border = '1px solid orange';
       } else {
        while(playerTwoName == "") {
            playerTwoName = prompt('You must select a name for player two');
        }
        PLAYERTWO.textContent = playerTwoName;
        PLAYERTWO.style.color = ''
    }   
}

function playerOneNameChecker() {
    let playerOneName = prompt('Please select a name for player one');
   if (playerOneName != "") {
       PLAYERONE.textContent = playerOneName;
       PLAYERONE.style.color = 'red';
       PLAYERONE.style.border = '1px solid orange';
       PLAYERONE.style.borderRadius = '5px';

       playerTwoNameChecker();
  } else {
   while(playerOneName == "") {
           playerOneName = prompt('You must select a name for player one');
       }
       PLAYERONE.textContent = playerOneName;
       PLAYERONE.style.color = 'red';  
       
       playerTwoNameChecker();
  }
}
playerOneNameChecker();

function playerTurnChecker(player) {
  if(player.style.border === '1px solid orange') {
    return "true"
  } else {
    return "false"
  }
}

        CELL[0].addEventListener('click', function() {
             if(CELL[0].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLONE.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLONE.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLONE.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                    board[0][0] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
             } else {
                alert('This box is full, try again')
             }
           
        });
        
        CELL[1].addEventListener('click', function() {
            if(CELL[1].textContent === '') {
            let choice = prompt('please choose X or O');
            if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
              CELLTWO.textContent = choice.toUpperCase();
              if(playerTurnChecker(PLAYERONE) === 'true') {
                CELLTWO.style.color = 'red';
                PLAYERONE.style.border = 'none';
                PLAYERTWO.style.border = '1px solid orange';
                PLAYERTWO.style.borderRadius = '5px';
              } else {
                CELLTWO.style.color = 'blue';
                PLAYERTWO.style.border = 'none';
                PLAYERONE.style.border = '1px solid orange';
              }
              board[0][1] = choice;
            } else {
                choice = undefined;
                alert("you must enter X or O. Please try again");
            }
        } else {
            alert('This box is full, try again')
        }
        })
        
        CELL[2].addEventListener('click', function() {
            if(CELL[2].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLTHREE.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLTHREE.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLTHREE.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[0][2] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[3].addEventListener('click', function() {
            if(CELL[3].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLFOUR.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLFOUR.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLFOUR.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[1][0] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[4].addEventListener('click', function() {
            if(CELL[4].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLFIVE.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLFIVE.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLFIVE.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[1][1] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[5].addEventListener('click', function() {
            if(CELL[5].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLSIX.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLSIX.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLSIX.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[1][2] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[6].addEventListener('click', function() {
            if(CELL[6].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLSEVEN.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLSEVEN.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLSEVEN.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[2][0] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[7].addEventListener('click', function() {
            if(CELL[7].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLEIGHT.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLEIGHT.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLEIGHT.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[2][1] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })
        
        CELL[8].addEventListener('click', function() {
            if(CELL[8].textContent === '') {
                let choice = prompt('please choose X or O');
                if(choice == 'x' || choice == 'o' || choice == 'O' || choice == 'X') {
                  CELLNINE.textContent = choice.toUpperCase();
                  if(playerTurnChecker(PLAYERONE) === 'true') {
                    CELLNINE.style.color = 'red';
                    PLAYERONE.style.border = 'none';
                    PLAYERTWO.style.border = '1px solid orange';
                    PLAYERTWO.style.borderRadius = '5px';
                  } else {
                    CELLNINE.style.color = 'blue';
                    PLAYERTWO.style.border = 'none';
                    PLAYERONE.style.border = '1px solid orange';
                  }
                  board[2][2] = choice;
                } else {
                    choice = undefined;
                    alert("you must enter X or O. Please try again");
                }
            } else {
                alert('This box is full, try again')
            }
        })





