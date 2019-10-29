const http = new easyHTTP;

//GET Posts
//posts parameter = to the call back parameter self.http.responseText()
// http.getPost('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(posts);
//   }
// });

//Create Data
const data = {
  tile: 'Custom post',
  body: 'This is a custom post'
};


// // //create post
// http.postPost('https://jsonplaceholder.typicode.com/users/1/posts', data, function(err, post){
//   if(err){
//         console.log(err)
//       }else{
//         console.log(post);
//       }
// });


//Update Post
// http.putPost('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if(err){
//             console.log(err)
//           }else{
//             console.log(post);
//           }
// });


// //Deleting a post
http.deletePost('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if(err){
    console.log(err)
  }else{
    console.log(response);
  }
});
