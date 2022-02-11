# Four-In-A-Row

This is my first Javascript project that I build by myself from scratch! It's a simple game but it was both fun and challenging building it and it let me review and even get more familiar with lots of HTML, CSS and Javascript concepts that I have learnt and weren't so clear to me, such as event listeners, how to use arguments and paramaters in functions, divs and mostly classlists!! 

The way it works, if you move the mouse over the top of the grid, colors will pop to show you whether it's red or yellow turn.

Grid cells will get colored from bottom to top based on the column of the clicked cell, to fit the principle of the game. 

This game is for two players, the one who gets to match four cells of the same color in a row, whether vertically or horizontally or diagonally is the winnner! 

I ran into issues having it run vertically and horisontally in the end as I was trying to fix some other issues but the code for that is in my index.js file still.

The game should also checks for a tie,( I wrote the function that checks for the tie situation but I am not calling it for now as it needs fixing) plus I don't think this is the best way yet because it checks for a tie when all cells are colored and there's no winner, but I know in most cases when the game leads to a tie, the result could be detected before all cells are colored. I am currently working on having the game stop once a winner is declared, and I am trying to apply the 'settimeout" concept to implement so. 

As far as grid template, using divs and classes to distinguish rows and columns was the clearest way for me to display the grid and access the cells later in javascript. 

The CSS for this game for now is just basic and minimal and I am looking forward to adding more options and have it more interactive in the future.

Some of the challenging parts were, checking diagonally and since the first empty cell in every clicked column will get colored, it was challenging to pick whether I need the colored cell or the clicked cell each turn. I first thought of checking diagonally based on the cell that was just colored which took me a lot of time without coming up with something that worked, then after receiving help, I figured that checking each diagonal of the grid that could possibly hold winning cells was clearer, but this poses another problem how to make sure the picked cells of the same color on each diagonal were in a row...

Another challenge was accessing the position of cells through their Classlists, but once this issue was figured out, I got to advance quicker in building my game. 

I believe this is a long term project, it still needs a lot of improvements to make the code more efficient. I am looking forward to improving its functionality as I advance more in my full stack web development bootcamp, such as making it possible for two players to play a game session in different computers and adding the option of playing against the computer. 

Here's the github deployed link for the game as it's for now:

https://aydamkd.github.io/Four-In-A-Row/
