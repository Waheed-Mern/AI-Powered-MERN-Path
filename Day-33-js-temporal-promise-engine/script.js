let checkDay = new Promise((resolve, reject) => {
  setTimeout(() => {
    let now = new Date();
    let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour:'2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    let localtime = now.toLocaleString('en-us', options);
    let utctime = now.toUTCString();
    let timeoffset = -now.getTimezoneOffset();
    let results = `
    LOCAL: ${localtime}<br>
    UTC: ${utctime}<br>
    Timezone Offset : GMT ${timeoffset>0? '+' : ''}${timeoffset}`;
    let toDay = now.getDay();
    if (toDay!==0) {
      resolve(results);
    }
    else{
      reject("Rest Day<br>" + results);
    }
  })
  }, 1000);
checkDay.then ((data) => {
  console.log("To Day is : " + data);
  document.getElementById("one").innerHTML = data
})
.catch((error) => {
  console.log("Rest Day : " + error);
  document.getElementById("one").innerHTML = error
});