//Array for case values
let caseValues = [0.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,75000,100000,200000,300000,400000,500000,750000,1000000];

//Payout if all cases are there
let basePayout = 11246.7697;

//Global variable for bank offer
let bankOfferNum = 0;


//cases stored in array of Cases, which consists of CaseName and CaseNumber tuples
//Global array that will be modified throughout the game
let cases = [];
//do we need a player global variable? what to keep track of there?


//this way we can reset the cases for new game and or make sure cases are all there or something 
/*
function setupCases(cases, caseValues)
{
  for(let i = 0; i < 25; i++)
  {
    cases.push((i+1,caseValues[i]));
  }
}
*/

//from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomizeCases(Cases)
{
  //  Cases.length  
  shuffle(Cases)

}


//returns the case that was separated while keeping the order of the cases the same (1,2,3,4 -> remove 3 -> 1,2,4)
function separateCase(choice, cases)
{
        let tmp=cases[choice-1];
        let index = choice-1;

        for (let i = index; i < cases.length-1;i++)
        {
            cases[i] = cases[i+1];
        }
        cases[cases.length-1] =tmp;
        return (cases.pop()); 

        
}



//Function for calculating the expected payout of remaining cases
function expectedPayout(){
  //number of cases left
  let n = caseValues.length;

  //probability of selecting each case
  let Px = (1/n);
  
  //expected payout
  let payout = 0;

  //summation of P(x)*x
  for(let i=0; i < n; i++)
  {
    payout = payout + (caseValues[i]*Px)
  }
  console.log(payout);
  return payout;
}


//Method for determining the bank's offer each turn
function bankOffer(){
  //calls expectedPayout method to get value of the current expected payout
  let expPayout = expectedPayout();

  //if expected value of remaining cases is less than initial expected value
  if(expPayout <= basePayout)
  {
    //multiplies by random number from .75-.99
    bankOfferNum = expPayout * Math.random() * (1 - .75) + .75;
  }
  //if expected value of remaining cases is greater than initial expected value
  else if(expPayout > basePayout)
  {
    //multiplies by random number from 1.1-1.8
    bankOfferNum = expPayout * Math.random() * (1.81 - 1.1) + 1.1;
  }

return bankOfferNum;

}