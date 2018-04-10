---
header-includes:
    - \usepackage[most]{tcolorbox}
    - \definecolor{light-yellow}{rgb}{1, 0.95, 0.7}
    - \newtcolorbox{myquote}{colback=light-yellow,grow to right by=-10mm,grow to left by=-10mm, boxrule=0pt,boxsep=0pt,breakable}
    - \newcommand{\todo}[1]{\begin{myquote} \textbf{TODO:} \emph{#1} \end{myquote}}
---

## PIG DICE ##
### PROJECT BY LUCAS LAMBERT ###


The concept was to have an online game of __PIG DICE__.

\ RULES{Of the Game...}
Pig dice is a game that uses random numbers, where chance and a players decisions to reach a predefined number.

## How it works ##

The concept revolves around chances, using a variable to determine the result of a rolled dice.

__If the dice roll__ is equal to __one__, the game switches players and nullifies any added score the player might has accumulated before the dice was rolled.

Otherwise, as long as the dice roll equals 2 to 6, the game keep the turn on the player until the player chooses to "hold", which stores the accumulated score & passes the turn to the next player.
