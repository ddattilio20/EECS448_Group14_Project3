//Array for case values
let caseValues = [0.01,1,5,10,25,50,75,100,200,300,400,500,750,1000,5000,10000,25000,75000,100000,200000,300000,400000,500000,750000,1000000];



function randomizeCases(Cases)
{
  //  Cases.length  
}


//Function for calculating the expected payout of remaining cases
function expectedPayout(){
  //number of cases left
  let n = caseValues.length();

  //probability of selecting each case
  let Px = (1/n);
  
  //expected payout
  let payout = 0;

  //summation of P(x)*x
  for(let i=0; i <= n; i++)
  {
    payout = payout + (caseValues[i]*Px)
  }
  console.log(payout);
  return payout;
}