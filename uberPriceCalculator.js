class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerMile;
      const timeCost = time * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  
  // Create an Uber price calculator with rates
  const uberCalculator = new UberPriceCalculator(5, 0.2, 1.5);
  
  // Calculate the price for a ride
  const distanceTraveled = 10; // in miles
  const timeSpent = 15; // in minutes
  const totalPrice = uberCalculator.calculatePrice(distanceTraveled, timeSpent);
  
  console.log(`Total Uber price: $${totalPrice.toFixed(2)}`);
  

  //output
  // Total Uber Price: $23.00