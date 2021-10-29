//Array for case values
let caseValues = [0.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,75000,100000,200000,300000,400000,500000,750000,1000000];

//Payout if all cases are there
let basePayout = 11246.7697;

//Global variable for bank offer
let bankOffer = 0;


//cases stored in array of Cases, which consists of CaseName and CaseNumber tuples
//Global array that will be modified throughout the game
let cases = [];

function setupCases()
{
  
}

function randomizeCases(Cases)
{
  //  Cases.length  
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
  let expPayout = expectedPayout();

  //if expected value of remaining cases is less than initial expected value
  if(expPayout <= basePayout)
  {
    //multiplies by random number from .75-.99
    bankOffer = expPayout * Math.random() * (1 - .75) + .75;
  }
  //if expected value of remaining cases is greater than initial expected value
  else if(expPayout > basePayout)
  {
    //multiplies by random number from 1.1-1.8
    bankOffer = expPayout * Math.random() * (1.81 - 1.1) + 1.1;
  }




return bankOffer;


}