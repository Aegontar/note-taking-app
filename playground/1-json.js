
fs = require("fs");

/* const book = {
     
    title: "Ego is the enemy",
    author: "Ryan Holiday"


}


const bookJSON = JSON.stringify(book)

fs.writeFileSync("1-json.json", bookJSON) */

const dataBuffer = fs.readFileSync('1-json.json')





const dataJSON = dataBuffer.toString() 


const user = JSON.parse(dataJSON)

user.name = 'Gnar'
user.age = 5

const store = JSON.stringify(user)

fs.writeFileSync("1-json.json", store)



