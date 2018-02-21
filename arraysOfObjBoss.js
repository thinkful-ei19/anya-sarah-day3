'use strict';

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.

const newArr = [
  {
      name: "Lela",
      jobTitle: "Space Captain",
      boss: 'Rick'
  },

  {
      name: "Garfield",
      jobTitle: "Lazy Boss",
      boss: 'Lela'
  },

  {
      name: "Rick",
      jobTitle: "Crazy Grandad"
  },

  {
      name: "Morty",
      jobTitle: "Poor Grandson",
      boss: 'Garfield'
  }
];


newArr.forEach(function(item) {
  item.boss === undefined ? console.log(`${item.jobTitle} ${item.name} doesn't report to anybody`) : console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`)
});