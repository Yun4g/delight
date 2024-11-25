document.addEventListener('DOMContentLoaded', ()=>{
// get data

let DataURL = new URLSearchParams(window.location.search);
let id = DataURL.get('id');

// get data from localstorage
const storedData = localStorage.getItem('data');
const parsedData = JSON.parse(storedData)

console.log(parsedData);
let container = document.querySelector('.overall');
console.log(container)

let detailsTOData;
if (parsedData && id) {
    
    const selectedData = parsedData.find(item => item.id == id);
    console.log(selectedData);
    
    detailsTOData =  `
      <div class="flex flex-col justify-center ">
          <div class = " flex justify-center">
            <div class=" rounded-full w-40  h-40 overflow-hidden">
                <img src="${selectedData.img}" class="rounded-full w-full h-full" alt="">
            </div>
            </div>
            <div>
                <h1 class="text-4xl text-white">${selectedData.Firstname} ${selectedData.lastName}</h1>
            </div>
            <div class="mt-7 mb-7">
                <p class="text-3xl text-white">${selectedData.address}</p>
            </div>
            <div>
                <p class="text-3xl text-white">${selectedData.PhoneNumber}</p>
            </div>
            <div class="mt-4">

               <a href=""><i class="fa-brands fa-facebook-f text-xl text-white"></i></a> 
              <a href=""> <i class="fa-brands fa-instagram text-xl text-white"></i></a> 
              <a href=""><i class="fa-brands fa-x-twitter text-xl text-white"></i></a> 
              <a href=""> <i class="fa-brands fa-linkedin text-xl text-white"></i></a> 
            </div>
        </div>
    
    
    ` 
}

container.innerHTML = detailsTOData;
})

