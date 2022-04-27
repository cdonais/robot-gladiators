<<<<<<< HEAD
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
=======
var randomNumber=function(min,max){
    var value=Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var playerInfo={
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health=100;
        this.money=10;
        this.attack=10;
    },
    refillHealth: function() {
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money>= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }    
};
var enemyInfo=[
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
>>>>>>> develop
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
<<<<<<< HEAD
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
=======
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
>>>>>>> develop
        break;
      }
    }

<<<<<<< HEAD
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;
=======
    //generate random damage value based on player's attack power
    var damage=randomNumber(playerInfo.attack + -3, playerInfo.attack);
    
    enemy.health=Math.max(0, enemy.health-damage);

    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
>>>>>>> develop

      // leave while() loop since enemy is dead
      break;
    } else {
<<<<<<< HEAD
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
=======
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damge=randomNumber(enemy.attack-3, enemy.attack);

    playerInfo.health=Math.max(0, playerInfo.health-damage);
    
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
>>>>>>> develop
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
//function to start a new game
var startGame=function() {
    //reset player stats
<<<<<<< HEAD
    playerHealth=100;
    playerAttack=10;
    playerMoney=10;

    for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
        if (playerHealth > 0) {
     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
             var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
            enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
=======
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
     // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemy.names array
             var pickedEnemyObj = enemyInfo[i];

    // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40,60);

    // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            //if we're not at last enemy in array
            if(playerInfo.health>0 && i<enemyInfo.length - 1){
                //as if player wants to shop before next round
                var storeConfirm=window.confirm("The fight is over, visit the store before the next round?");

                //if yes, take to store() function
                if (storeConfirm){
                shop();
                }
            }    
>>>>>>> develop
  }
  // if player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }
     }
     endGame();
};
//function to end game
var endGame=function(){
    window.alert("The game has now ended. Let's see how you did!")
    //if player is still alive, player wins!
<<<<<<< HEAD
    if (playerHealth>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
=======
    if (playerInfo.health>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
>>>>>>> develop
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
//ask player if they'd like to play again
var playAgainConfirm=window.confirm("Would you like to play again?");

<<<<<<< HEAD
if(playAgainConfirm) {
    //restart game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators. Come back soon!")
}
};
=======
    if(playAgainConfirm) {
    //restart game
    startGame();
    }
    else {
    window.alert("Thank you for playing Robot Gladiators. Come back soon!")
    }
};
var shop=function(){
    //ask player what they'd like to do
    var shopOptionPrompt=window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' "
        );
      //use switch to carry out action
      switch(shopOptionPrompt){
          case "REFILL":
          case "refill":
              playerInfo:refillHealth();
            break;
          case "UPGRADE":  
          case "upgrade":
            playerInfo.upgradeAttack();              
            break;
          case "LEAVE":    
          case "leave":
              window.alert("Leaving the store.");  
              //do nothing, function end
              break;
           default:
               window.alert("You did not pick a valid option. Try again");
               //call shop() again and force player to pick valid option
               shop();
               break;  
      }  
    };   
>>>>>>> develop
//start game when page loads
startGame();


