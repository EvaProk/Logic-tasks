const time = ["12:00PM-01:30PM", "09:30AM-11:30AM", "03:30PM-04:30PM" ] // 300-600


const breakTime = (strArr) => {

  // convert time to minutes
  const time = {
    "01": 1,
    "02": 2,
    "03": 3,
    "04": 4,
    "05": 5,
    "06": 6,
    "07": 7,
    "08": 8,
    "09": 9,
    "10": 10,
    "11": 11,
    "12": 12,
    "00": 0,
  }

const timeToMin = (timeSlot)=> {
  let timeInMin = 0;
  let startAMPM = timeSlot.substring(5,7);
  let hoursStart = timeSlot.substring(0,2)
  let minStart = Number(timeSlot.substring(3,5))
  
if(startAMPM === "AM"){
  timeInMin = time[hoursStart] * 60 + minStart
}else if(startAMPM === "PM" && hoursStart === "12" ){
  timeInMin = (time[hoursStart]) * 60  + minStart
}else{
  timeInMin = (time[hoursStart] + 12 ) * 60  + minStart
}
return timeInMin
}

// sort the time array 
strArr.sort((timeSlotA, timeSlotB) => {
  time1 = timeToMin(timeSlotA.substring(0,7))
  time2 = timeToMin(timeSlotB.substring(0,7))
  return time1 - time2
})

let res = 0;
for( let i = 1; i < strArr.length; i ++){
  let diff = timeToMin(strArr[i].substring(0,7)) - timeToMin(strArr[i-1].substring(8,15))
  diff > res ? res = diff : res
//  if( diff > res ) {
//    res = diff
//  }
}

let hours = Math.trunc(res/60) >= 10 ? `${Math.trunc(res/60)}`: `0${Math.trunc(res/60)}`;
let minutes = res - (hours * 60) >= 10 ? `${res - (hours * 60)}`: `0${res - (hours * 60)}`;

return `${hours}:${minutes}`

}

console.log(breakTime(time));