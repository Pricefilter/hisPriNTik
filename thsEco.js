
// const fetch = require("node-fetch");


// function getDiff(url) {
//     if (url.includes("lazada") == true)  {
//         return lzd(url)
//     } else {
//     if ((url.includes("p.ee") == true) ||  (url.includes("e.ee") == true)) {
//         shp(url)
//         .then(result => {
//             const gap = result; // Assign the value to the variable gap
//             return gap; // Output the value of gap
//           });
//           return gap
//     } else {
//         return `Không hỗ trợ địa chỉ này ${url}`
//     } 
//     }
// }








// function lzd(url) {
//     const kol = /\.vn\/l./;
//     const koc = /\?cc/;
//     if (kol.test(url) || koc.test(url)) {
//         return "Địa chỉ bạn vừa gửi là link Affiliate. Hãy thử lại với link sản phẩm được lấy tại mục chia sẻ của Lazada để tôi có thể hoàn thành tốt nhiệm vụ nhé!"
//     } else {
//         return url
//     }
//   }
   



//   function shp(url) {
//     return fetch(url)
//           .then(response => {
//             const requestUrl = response.url;
//             console.log(requestUrl)
//             return requestUrl
//           })
//   }

//   module.exports = getDiff;  
