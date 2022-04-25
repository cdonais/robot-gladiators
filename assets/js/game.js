//Game States
//"WIN"-Player robot has defeated all enemy-robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE"-Player robot's health is zero or less

var playerName=window.prompt("what is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

var enemyNames=["Roborto", "Amy Android", "Robo Trumble"]
var enemyHealth=50;
var enemyAttack=12;

    var fight=function(enemyName) { 
    while(playerHealth>0 && enemyHealth>0){
    //repeat and execute as long as the enemy-robot is alive
    //fight function statements
        var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight); 
                //if player chooses to skip, confirm and then stop the loop
            } 
            if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip=window.confirm("Are you sure you'd like to quit?");  
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney=playerMoney-10;
            console.log("playerMoney", playerMoney);
            break;
        } 
    }
            //remove enemy's health by subtracting amount set in player attack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        //award player money for winning
        playerMoney=playerMoney+20

            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
        }
        //remove player's health by subtracting amount set in enemy attack variable
        playerHealth=playerHealth-enemyAttack;
        console.log(
            enemyName+ " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use the result to update the value in 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check player's health
        if (playerHealth <=0) {
         window.alert(playerName + " has died!");
         break;   
        }
        else {
        window.alert(playerName + " still has" + playerHealth + " health left.");
        }
    }
};
    for(var i=0; i <enemyNames.length; i++){
        var pickedEnemyName=enemyNames[i];
        enemyHealth=50;
        fight(pickedEnemyName);
    }




