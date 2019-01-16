export function getDataCategories(arr,key){
return arr.map((e)=>{
  return e[key]
}).filter((e,i,a)=>{
  return i === a.indexOf(e)
})
}

