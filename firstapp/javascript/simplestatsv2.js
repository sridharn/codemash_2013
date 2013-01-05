db = db.getSiblingDB("firstapp")

// find all users who've checked in at Taj Mahal:

location_id = db.locations.findOne({name:"Taj Mahal"}, {_id:1})["_id"]

users = db.checkins.find({location: location_id}, {_id: 0, user: 1}).toArray()
userids = users.map(function(doc) {
    return doc.user
})

users = db.users.find({_id: {$in: userids}})

// find the last 10 checkins here:
db.checkins.find({location: location_id}).sort({ts: -1}).limit(10)

// count how many checked in today:
db.checkins.find({location: location_id, ts: {$gt: midnight}}).count()
