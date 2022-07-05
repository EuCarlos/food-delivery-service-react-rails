export function randomIntFromInterval(min: number, max: number): string { // min and max included 
    const result = Math.random() * (max - min + 1) + min
    if (result >= max)
        return (Math.floor(Math.random() * (max - min + 1) + min)).toFixed(1)
    else
        return result.toFixed(1)
  }