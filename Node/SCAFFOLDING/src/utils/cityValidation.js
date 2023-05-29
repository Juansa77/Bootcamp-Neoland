const cityValidation = (city)=>{
const cities = ["sevilla", "madrid", "cádiz", "barcelona", "oviedo", "huelva"]
const result =cities.includes(city.toLowerCase())
return result
}

module.exports = cityValidation