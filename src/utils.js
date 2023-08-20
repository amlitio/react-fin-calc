// Utility functions

export function calculateTotal(principal, interest, years, frequency) {
  // Calculation formula
  let total = principal;
  
  for(let i=0; i<years; i++) {
    if (frequency === 'yearly') {
      total += total * interest/100;
    } else if (frequency === 'monthly') {
      total += total * (interest/100)/12; 
    }
  }

  return total;
}

export function getChartData(principal, interest, years) {
  const data = [];
  
  for(let year=1; year<=years; year++) {
    let projected = principal;
    for(let i=0; i<year; i++) {
      projected += projected * (interest/100);
    }
    data.push(projected);
  }

  return data;
}
