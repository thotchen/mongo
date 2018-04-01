db.moviesDetails.find({mpaaRating: {$exists: true}})

db.moviesDetails.find({mpaaRating: {$exists: false}})

db.movieDetails.find({mpaaRating: null})

db.movieDetails.find({})

db.movies.find({viewerRating: {$type: "int"}}).pretty()

db.movies.find({viewerRating: {$type: "double"}}).pretty()

use 100YWeatherSmall

db.data.find({atmosphericPressureChange: {$exists: false}}).count()
