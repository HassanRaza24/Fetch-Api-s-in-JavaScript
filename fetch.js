// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response) => {
//     return Response.json()
// })
// .then((result) => {
//     console.log(result)
// })
// .catch(() => {
//     console.log("error")
// })



// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch(() => console.log("error"))











// document.getElementById("btn").addEventListener("click", function (e) {
//     e.preventDefault();

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//         title: document.getElementById("in1").value,
//         body: document.getElementById("in2").value,
//         userId: document.getElementById("in3").value
//     }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));


// });







// document.getElementById("btn").addEventListener("click", function (e) {
//     e.preventDefault()

//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'PUT',
//         body: JSON.stringify({
//             id: 1,
//             title: document.getElementById("in1").value,
//             body: document.getElementById("in2").value,
//             userId: document.getElementById("in3").value
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));

// });


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});