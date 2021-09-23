function judgeVegetable(vegatables, metric){
  let name = '';
  let greatest = 0;

  for (let submission of vegatables){
    
    if (submission[metric] > greatest){
      greatest = submission[metric];
      name = submission.submitter;
    }
  }
  return name
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))