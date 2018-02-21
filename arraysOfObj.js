/*
Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.
*/

const newArr = [
    {
        name: "Lela",
        jobTitle: "Space Captain"
    },

    {
        name: "Garfield",
        jobTitle: "Lazy Boss"
    },

    {
        name: "Rick",
        jobTitle: "Crazy Grandad"
    },

    {
        name: "Morty",
        jobTitle: "Poor Grandson"
    }
];

console.log(newArr);

newArr.forEach(function(item) {
    console.log(`${item.name} is ${item.jobTitle}`);
});