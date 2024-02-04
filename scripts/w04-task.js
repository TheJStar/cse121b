/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProject = {
    name: "Joel Ayvazyan",
    photo: "./images/myProfilePicture.jpg",
    favoriteFoods: [
    "banana",
    "orange", 
    "apple",
    "shawarma", 
    "steak"
    ],
    hobbies: [
        "drawing",
        "learing",
        "cooking",
        "creating"
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProject.placesLived.push({place: "Yerevan, Armenia", length: "19 years"});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProject.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProject.photo;
document.querySelector("#photo").alt = myProject.name;
/* Favorite Foods List*/
myProject.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProject.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
myProject.placesLived.forEach(object => {
    let dt = document.createElement("dt");
    dt.textContent = object.place;
    let dd = document.createElement("dd");
    dd.textContent = object.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})