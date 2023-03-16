const ul= document.querySelector("ul")

const URL = "https://northwind.vercel.app/api/products/"

// $.ajax({
//     url: URL,
//     method: "GET"
// }).done(function(data){
//     for(let i = 0; i<data.length; i++){
//         let li = document.createElement("li");
//         li.innerText = data[i].id + " " + data[i].name
//         ul.append(li)
//     }
// })

// let obj = {
//     name: "hello"
// }

// $.ajax({
//     url: URL,
//     method: "POST",
//     data: obj
// }).done(function(res){
//     console.log(res)
// })

// $.ajax({
//     url:URL+78,
//     method: "DELETE"
// }).done(function(res){
//     console.log(res)
// })

// $.ajax({
//     url: URL+78,
//     method: "PUT",
//     data: {
//         name: "BP207",
//         unitPrice: 100
//     }
// }).done(function(res){
//     console.log(res)
// })

//GET, POST, PUT, DELETE

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         for(let i = 0; i<data.length; i++){
//                     let li = document.createElement("li");
//                     li.innerText = data[i].id + " " + data[i].name
//                     ul.append(li)
//                 }
//     })

// fetch(URL, {
//     method: "POST",
//     body: {
//         name: "BP207"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

// fetch(URL+79, {
//     method: "DELETE"
// })
//     .then(res=> res.json())
//     .then(data=> console.log(data))

// fetch(URL+78, {
//     method: "PUT",
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//        },
//     body: JSON.stringify({
//         name: "BP207",
//         quantity: 100
//     })
// })
//     .then(res=> res.json())
//     .then(data=> console.log(data))

// let obj = {
//             name: "BP207",
//             quantity: 100
// }

// let arr = [3, 1, 4, 5]

// let stringArr = JSON.stringify(arr)

// console.log("json", stringArr)

// console.log("arr", JSON.parse(stringArr))


// axios.get(URL)
//     .then(res => {
//         if(res.status == 200){
//             for(let i = 0; i<res.data.length; i++){
//                 let li = document.createElement("li");
//                 li.innerText = res.data[i].id + " " + res.data[i].name
//                 ul.append(li)
//             }
//         }
//         else{
//             ul.innerText = "Something went"
//         }
//     })

// axios.post(URL, {
//     name: "BP207",
//     quantity: 16
// })
//     .then(res => console.log(res))

// axios.put(URL+77, {
//     name: "BP208",
//    quantity: 100
// })
//     .then(res => console.log(res))

axios.delete(URL+5)
    .then()