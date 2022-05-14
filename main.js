
const getData = async () => {
    const response = await fetch('https://murmuring-castle-51611.herokuapp.com/api/people')
    const data = await response.json()
    console.log(data)
}