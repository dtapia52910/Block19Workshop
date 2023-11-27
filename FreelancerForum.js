
const names = ["Spicoli", "Bill", "Ted", "Sarah Connor", "Ferris Bueller", "Marty McFly", "Indiana Jones", "Freddy Krueger"];
const occupations = ["Surfboard Customizer and Beach Artist", "Travel and Adventure Blogger", "Air Guitar Music Producer", "Cybernetic Illustrator", "High School Social Media Influence", "Time-Traveling Graphic Designer", "Archaeological Content Writer", "Dreamweaver and Nightmare Consultant"];
const startingPrices = [30, 50];
const maxFreelancers = 20;
const freelancers = [
  { name: "Spicoli", occupation: "Surfboard Customizer and Beach Artist", startingPrice: 30 },
  { name: "Bill", occupation: "Travel and Adventure Blogger", startingPrice: 50 },
  { name: "Ted", occupation: "Air Guitar Music Producer", startingPrice: 30 },
  { name: "Sarah Connor", occupation: "Cybernetic Illustrator", startingPrice: 50 },
  { name: "Ferris Bueller", occupation: "High School Social Media Influencer", startingPrice: 30 },
  { name: "Marty McFly", occupation: "Time-Traveling Graphic Designer", startingPrice: 50 },
  { name: "Indiana Jones", occupation: "Archaeological Content Writer", startingPrice: 30 },
  { name: "Freddy Krueger", occupation: "Dreamweaver and Nightmare Consultant", startingPrice: 50 },
];

// `setInterval` will call `addFreelancer` every 3 seconds
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

function render() {
  // Render the freelancers
  const freelancerList = document.querySelector("#freelancer-list");
  freelancerList.innerHTML = ''; // Clear previous content

  freelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancerList.appendChild(listItem);
  });

  // Render the average starting price
  const averagePriceElement = document.querySelector("#average-price");
  const averagePrice = calculateAverageStartingPrice();
  averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

/**
 * Add a random freelancer to the `freelancers` array
 */
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 100) + 1; // Random starting price between 1 and 100

  freelancers.push({ name, occupation, startingPrice });

  render();

  // Stop adding freelancers if we've reached the maximum number of freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}

/**
 * Calculate the average starting price of the freelancers array
 */
function calculateAverageStartingPrice() {
  const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  return totalStartingPrice / freelancers.length;
}