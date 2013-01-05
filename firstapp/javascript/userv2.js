db = db.getSiblingDB("firstapp")

user_1 = {
      _id: "sridhar@10gen.com",
      name: "Sridhar",
      twitter: "snanjund",
}

db.users2.save(user_1)

location_id = db.locations.findOne({name:"Taj Mahal"}, {_id:1})["_id"]

checkin_1 = {
      location: location_id,
      user: "sridhar@10gen.com",
      ts: ISODate("2012-09-21T11:52:27.442Z")
}

db.checkins.save(checkin_1)

db.checkins.ensureIndex({user: 1})

db.checkins.find({user: "sridhar@10gen.com"}) 