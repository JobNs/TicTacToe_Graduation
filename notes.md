# Tic Tac toe Game

# Attomic behaviours

- There is a valid playing grid
    - ✅playing grid of 9 -> OK
    - ✅playing grid of 8 -> NOK
    - ✅playing grid of 10 -> NOK

- There are 2 valid players
    - ✅2 players -> OK
    - ✅3 players -> NOK
    - ✅Player one has symbol X -> OK
    - ✅Player two has symbol O -> OK

- Player 1 starts at the beginning of the game
    - ✅Active player is player 1 -> OK
    - ✅Active player is player 2 -> NOK

- Active player can be switched
    - ✅Active player 1 becomes 2 -> OK
    - ✅Active player 1 stays 1 -> NOK
    - ✅Active player 2 becomes 1 -> OK

- Players can write their symbol to the playing grid
    - ✅["X", , , , , , , , ] -> OK
    - ✅[ , , , ,"X", , , , ] -> OK
    - ✅["O", , , , , , , , ] -> OK

- There is a check whether their is not a symbol allready
    - ✅["X", , , , , , , , ], O wants in second place -> OK
    - ✅["X", , , , , , , , ], O wants in first place -> NOK

- Check if player has won horizontal
    - ✅["X","X","X", , , , , , ] -> OK
    - ✅["X", ,"X","X", , , , , ] -> NOK
    - ✅[ , , ,"X","X","X", , , ] -> true
    - ✅[ , , , , , ,"O","O","O"] -> true

- Check if player has won vertical
    - ✅['X','','','X','','','X','',''] -> true
    - ✅['','X','','','X','','','X',''] -> true
    - ✅['','','X','','','X','','','X'] -> true

- Check if player has won diagonal
    - ✅['X','','','','X','','','','X'] -> true
    - ✅['','','X','','X','','X','',''] -> true

- Check if playing grid is full (draw)
    - ✅['X','','','','','','','',''] -> NOK
    - ✅['X','O','X','O','O','X','X','X','O'] -> OK
    - ✅['X','O','X','O','O','','X','X','O'] -> NOK

- Have a valid random symbol place input
    - ✅between 0 and 8 -> OK


['','','','','','','','','']
