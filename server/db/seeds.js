use bucketList;
db.dropDatabase();

db.bucketCollection.insertMany([
  {
    activity: "Bungee Jump",
    location: "Australia",
    cost: "500"
  },
  {
    activity: "Seeing the Taj Mahal",
    location: "Agra, India",
    cost: "2000"
  },
  {
    activity: "Camp America",
    location: "West Virginia",
    cost: "1000"
  }
]);
