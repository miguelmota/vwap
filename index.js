// input: [[volume, price], [volume, price], ...]
module.exports = (...p) => {
  if (p.length===1&&Array.isArray(p[0]))p=p[0]
  if (!p.length) return 0
  // formula: sum(num shares * share price)/(total shares)
  return p.reduce((s,x)=>s+(x[0]*x[1]),0)/p.reduce((s,x)=>s+x[0],0)||0;
}
