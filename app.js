const lodePhone = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json()
    displyPhone(data.data, dataLimit)
}
const displyPhone = (phones, dataLimit) => {
    console.log(phones)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = ''
    const showAll = document.getElementById('show-all')
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')

    } else {
        showAll.classList.add('d-none')
    }

    //displyPhone 20 ta
    //disply no phone found
    const noPhoneFound = document.getElementById('no-found-message')
    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none')
    } else {
        noPhoneFound.classList.add('d-none')
    }




    //disply all phone




    phones.forEach(phone => {
            const phoneDiv = document.createElement('div')
            phoneDiv.classList.add('col')
            phoneDiv.innerHTML = `
        <div class="card p-5 mt-5">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        
        `
            phoneContainer.appendChild(phoneDiv)
        })
        //stop loding toggler
    togglespinner(false);
}
const processSerach = (dataLimit) => {
    togglespinner(true)
    const seaechFiled = document.getElementById('search-field')
    const seaechText = seaechFiled.value
    lodePhone(seaechText, dataLimit)
}
document.getElementById('search-btn').addEventListener('click', function() {
    //start loader
    processSerach(10);

})
const togglespinner = isLoasing => {
    const loadingsection = document.getElementById('lode-spinner')
    if (isLoasing) {
        loadingsection.classList.remove('d-none')
    } else {
        loadingsection.classList.add('d-none')
    }
}
document.getElementById('bnt-show-all').addEventListener('click', function() {
    processSerach()
})

//lodePhone()