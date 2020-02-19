import React from 'react';


const GetApi = () => {
    return (
        <div></div>
    );
}


let xhhtp = new XMLHttpRequest();
  
  
xhhtp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        myFunction(this.responseText)
      }
}
  
  
xhhtp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
xhhtp.send();
  
  
function myFunction(data) {
      console.log(data)
}

export default GetApi;