//import React, { useState, useEffect } from "react";

/*
function Listvalue() {

    return fetch('../public/datas.json').then((response)=> response.json()).then((body)=> {
        console.log(body);
    });
}*/

let dataVal;
fetch('http://10.18.1.126:9090/hello?count=800', { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }  }).then((response)=> response.json()).then((body)=> {
    console.log(body);
    dataVal = body;
});

console.log(dataVal);
async function tj_customer_name() {
    const response = await fetch('http://10.18.1.126:8123/hello?count=800', { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let json = await response.json();
    json = json.map((datas,i)=> {
        datas.lat = datas.LATITUDE;
        datas.lng = datas.LONGITUDE;
        return datas;
    });
    return json;
}

const dataVals=async()=>{
    const allDatas = await tj_customer_name();
    console.log(allDatas);
    return allDatas;
}


// this.Listvalue=()=>{
   
//    debugger
//     fetch('http://10.18.1.126:9090/hello?count=800').then((response)=> response.json()).then((body)=> {
//         //console.log(body);
//         var latandlong=[];
//         for (var i = 0; i < body.length; i++) {
//           var finallat={};  
//           finallat.latitude= body[i].LATITUDE;
//           finallat.longitude= body[i].LONGITUDE;
//           latandlong.push(finallat);
//         }
//         const Datalat = latandlong;
//         console.log(latandlong);
//         return Datalat;
//         //const newState = {...this.state};
//         // this.callLatlong(latandlong);       
//         // this.setState({
//         //   stores: ""
//         // })
//       });
//     return Listvalue;
//     }

export const susolvkaCoords = { lat: 20.5937, lng: 78.9629 };

export const Listvalue=dataVals();