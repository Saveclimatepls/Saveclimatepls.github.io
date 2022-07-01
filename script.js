/* .js files add interaction to your website */

//Creating the fact array to group all the facts in one variable. We can also choose specific ones to display//
var factlist = [
  "'If you eliminate the scourge of bottled water, you'll be eliminating one of the biggest problems facing our environment.' - Charles Moore",
  
  "'By the year 2030, two-thirds of the world will be lacking access to clean drinking water.  This is a problem every single person will be dealing with regardless of where they live in the world.' - Tapped film",
  
  "'One of the city’s biggest water customers is Pepsico, which bottles Falls Lake water that it purchases at the same rate as residential customers and sells at a dramatic markup: While a gallon of Falls Lake water costs $.0022, Pepsi sells its Aquafina product at more than $4 per gallon — one of the reasons Durham City Councilman Eugene Brown has called for a boycott of Pepsi products. But at the same time, the city can’t release information to the public about Pepsico’s water usage without opening itself to litigation.' - Tapped film",
  
  "'Annually approximately 500 billion plastic bags are used worldwide. More than one million bags are used every minute.' - The Plastic Ocean",
  "'Not only are plastics polluting our oceans and waterways and killing marine life – it’s in all of us and we can’t escape consuming plastics.' - Marco Lambertini, Director General of WWF International."
];

//Test if the facts is displayed//
console.log(factlist);

//Assign fact generator variables//
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

//Looking if the audience has clicked the button then generating a fact for them//
factButton.addEventListener("click", displayFact);

//Create a function for each fact to run//
function displayFact(){
  fact.innerHTML = factlist[count];
  count++;
  if (count == factlist.length){
    count = 0;
  }
}
