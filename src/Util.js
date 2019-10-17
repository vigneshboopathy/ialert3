export const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;    //validation for mobile Number
export const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;        //validation for mail ID
export const alphabets = /^[A-Za-z]+$/;         //validation for alphabets
export const numbers = /^[0-9]+$/;              // Numbers
export const alphaNumeric = /^[0-9a-zA-Z]+$/;   // Alphabets with Numeric chars



export const postData=async(url, datas)=> {
    let formData = new FormData();
    for (var key in datas) {
        formData.append(key, datas[key]);    
    }
    console.log(formData);

    const response = await fetch(url, {
        'method' : 'POST',
        'Content-Type' : 'application/json',
        'Accept' : 'application/json', 
        'Access-Control-Allow-Origin': '*', 
        'body': formData
    })
    return await response.json();
}

export const getData=async(url, datas)=> {
    url = url+'?'+datas;
    const response = await fetch(url, {
        'method' : 'GET',
        'Content-Type' : 'application/json',
        'Accept' : 'application/json', 
        'Access-Control-Allow-Origin': '*'
    })
    return await response.json();
}