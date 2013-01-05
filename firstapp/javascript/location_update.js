db = db.getSiblingDB("firstapp")

db.locations.update(
   {name: "Lotus Flower"},
   {$push: {
        tips: {
           user: "Sridhar",
           date: ISODate("2012-09-21T11:52:27.442Z"),
           tip: "The sesame dumplings are awesome!"
       }
    }}
)

db.locations.findOne(name:/^Lot/)
