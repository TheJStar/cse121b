/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
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
myProfile.placesLived.push({place: "Yerevan, Armenia", length: "19 years"});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
myProfile.placesLived.forEach(object => {
    let dt = document.createElement("dt");
    dt.textContent = object.place;
    let dd = document.createElement("dd");
    dd.textContent = object.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})