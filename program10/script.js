function loadUser(){
   const result= document.getElementById("result")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if(!response){
            throw  new Error("internet issuse")
        }
        return response.json();

    }).then((data)=>{
        data.map((value)=>{
            console.log(value.username,value.email,value.address.city);
            result.innerHTML+=`<li><b>${value.username}</b>-${value.email}-${value.address.city}</li>`

        })

    }).catch((error)=>{
        throw new Error("data not found",error)

    })
}