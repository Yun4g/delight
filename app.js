

//  fetch data

const detailsData = async () => {
  let url = 'data.json'
  let response = await fetch(url);

  if (response.status == 200) {
    console.log('succesful')
  } else {
    return 'Error'
  }

  let data = await response.json();
  console.log(data)
  localStorage.setItem('data', JSON.stringify(data))

  let tbody = document.querySelector('.tableBODY');
  console.log(tbody);

  data.forEach(details => {
    let detailToHtml = `
         
          <tr data-id="${details.id}" class="transition-all duration-300 ">
               

          <td class="border-2 px-4 md:px-6 hidden md:table-cell">
               ${details.Firstname}
           </td>

           <td class="border-2 px-4 md:px-6 hidden md:table-cell">
             ${details.lastName}
         </td>
         <td class="border-2 px-4 md:px-6 hidden md:table-cell">
             ${details.Email}
         </td>
         <td class="border-2 px-4 md:px-6 hidden md:table-cell">
         ${details.PhoneNumber}
         </td>
         <td class="border border-gray-300 px-4  md:px-6 flex  items-center justify-evenly">
         <div class="p-2 bg-gray-300 rounded-full h-10 text-center w-10 cursor-pointer kabab">
            <i class="fa-solid fa-ellipsis"></i>
         </div>
          
            <div class = "text-center flex gap-4 transition-all duration-300  overflow-hidden h-14  w-0 open " >
          <a href="details.html?id=${details.id}">
            <p class="bg-gray-700 p-2 pt-4 h-full rounded-md text-white">  View Details</p>
            </a> 
             <button class="p-2 bg-red-900 text-white rounded-md deleteBtn"> Delete details</button>
             </div>
           
         </td>
            </tr>
         `

    tbody.innerHTML += detailToHtml
  });

}


document.addEventListener('DOMContentLoaded', async function () {
  await detailsData();


  let toggleBtn = document.querySelectorAll('.kabab')

  console.log(toggleBtn);

  toggleBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      let ViewAndDelete = btn.parentElement.querySelector('.open');

      if (ViewAndDelete.style.width === '0px') {
        ViewAndDelete.style.width = '80%'
      } else {
        ViewAndDelete.style.width = '0px'
      }
    })
  })



  //    delete button logic

  let tbody = document.querySelector('tbody');
  console.log(tbody)
  let overlay = document.querySelector('.overlay');
  let modal = document.querySelector('.modal')
  tbody.addEventListener('click', (e) => {

    if (e.target.classList.contains('deleteBtn')) {
      overlay.style.display = 'block';
      setTimeout(() => {
        modal.style.transform = ' translateY(200px)'
      }, 100);

      // let find the row
      //  let row = e.target.closest('tr');
      //  if (row) {
      //     row.remove()
      //  }
    }
  })

  let rowToDelete;

  tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
      overlay.style.display = 'block';
      setTimeout(() => {
        modal.style.transform = 'translateY(200px)';
      }, 100);


      rowToDelete = e.target.closest('tr');
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('yes')) {
      modal.style.transform = 'translateY(-700px)';

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 1000);

      setTimeout(() => {
        if (rowToDelete) {
          rowToDelete.remove();
          rowToDelete = null;
        }
      }, 1050);
    } else if (e.target.classList.contains('no')) {
      modal.style.transform = 'translateY(-700px)';

      setTimeout(() => {
        overlay.style.display = 'none';
      }, 1000);
    }
  });



});

