
const getData = async () => {
    const response = await fetch('https://murmuring-castle-51611.herokuapp.com/api/people')
    const data = await response.json()
    console.log(data)
}

getData()

const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const ageInput = document.querySelector('#age')
const myForm = document.querySelector('#my-form')


// const addNewPerson = async () => {
//     await fetch('https://murmuring-castle-51611.herokuapp.com/api/people', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             firstName: firstNameInput.value,
//             lastName: lastNameInput.value,
//             age: ageInput.value
//         })
//     })
// }

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addNewPerson()
})