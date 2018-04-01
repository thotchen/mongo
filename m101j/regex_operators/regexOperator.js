db.movieDetails.find({ "awards.text": { $regex: /^Won\s.*/ } }).pretty()

db.movieDetails.find({ "awards.text": { $regex: /^Won\s.*/ } },
                     { title: 1, "awards": 1, _id: 0}).pretty()
