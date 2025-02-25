import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://reel-app-c38aa-default-rtdb.firebaseio.com/"
 }
 

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

console.log(app)

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")


addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
  
   console.log(`${inputValue} added to database`)
   push(moviesInDB,inputValue)
})