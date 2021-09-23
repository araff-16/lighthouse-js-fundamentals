function smartGarbage(trash,bins){
  if (trash === 'waste'){
    bins.waste ++;
  }else if (trash ==='recycling'){
    bins.recycling ++;
  }else {
    bins.compost ++;
  }
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))