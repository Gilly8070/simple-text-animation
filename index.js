let obj = [{
    // "Product": "Product Recruiters",
    "Finance": "Finance Recruiters",
    "Marketing": "Marketing Recruiters",
    "CyberSec": "CyberSec Recruiters",

}]
        
// let keys = Object.keys(obj);
let keys = ['Finance','Marketing','CyberSec']
let heading1 = document.getElementById('heading1')
let heading2 = document.getElementById('heading2')

// console.log(Object.keys(obj))
console.log(Object.assign(obj))

setInterval(() => {
    setTimeout(() => {
    }, 1000)
    // obj.map((items, ind) => {
    //     // console.log(items)
    //     keys.map(el => 
    //         heading1.innerText = items[el]
    //         )
    //         // heading1.innerText = 
    //         // console.log('test')
    //     })
}, 1000)
let count = 0;
function func() {
    setTimeout(() => {
        func()
        // obj.map((items, ind) => {
            // console.log(count)
            // keys.forEach((el,ind) =>
            // console.log(ind)
        heading1.innerText = keys[count]
            heading2.innerText = obj[0][keys[count]]
        
            // console.log('eee', ind)
            // )
            // heading1.innerText =
            // console.log('test')
        // })
        if (count >= 0 && count < 2) {
            count++;
        } else {
            count = 0;
        }
    }, 2000)
}
func()

obj.map((el) => {
    // console.log(el, keys);
    // console.log(heading1)
    // Object.keys(obj).map(el => (
        // console.log(el)
    // ))
// console.log(Object.keys(obj))
})