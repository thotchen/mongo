db.movieDetails.find({countries: {$size: 1}}).pretty()

use 100YWeatherSmall
db.data.find({sections : {$size : 2 }}).count()
