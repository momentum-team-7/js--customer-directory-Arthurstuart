const container=document.querySelector(".customer-profile")
let customer = customers[0]
console.log('customer title is', customer.name.title)
console.log('Whats your first name?', customer.name.first)
console.log('Last name?', customer.name.last)

// See all customer first names
for (let customer of customers) {
    console.log(customer.name.first)

const customerProfile= document.createElement ("div")
customerProfile.classList.add('customer-file')

const customerIMG= document.createElement ("img")
customerIMG.src= customer.picture.thumbnail; // url="https://randomuser.me/api/portraits/thumb/women/62.jpg" 
container.appendChild(customerIMG)
console.log('Can we upload the image?', customerIMG)

const customerName= document.createElement ("h3")
customerName.innerText= `${customer.name.first} ${customer.name.last}`
container.appendChild(customerName)

const email= document.createElement ("p")
email.innerText= `${customer.email}`
container.appendChild(email)

const mailingAdd= document.createElement("h3")
mailingAdd.innerText= `${customer.location.street.name}
${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
container.appendChild(mailingAdd)

const dob= document.createElement("p")
dob.innerText= `${customer.dob.age}`
container.appendChild (dob)

const customerEstDate= document.createElement("h3")
customerEstDate= document.innerText= `{customer.registered.age}`
container.appendChild (customerEstDate)

}
