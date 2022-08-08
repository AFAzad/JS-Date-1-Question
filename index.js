//Unix time is a system for describing a point in time. It is the number of seconds that have elapsed since the Unix epoch, excluding leap seconds. The Unix epoch is 00:00:00 UTC on 1 January 1970

//Implement the function msSinceEpoch, which returns milliseconds since Unix epoch. (Use JS built in functions)





function msSinceEpoch() {
    // write code here
    const now = new Date()  
    const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000)  
    const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000)  
    // return the output , do not use console.log here
    return utcSecondsSinceEpoch, utcMilllisecondsSinceEpoch;
};

//console.log(msSinceEpoch());