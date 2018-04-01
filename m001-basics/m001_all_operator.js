db.movieDetails.find({genres: {$all: ["Comedy", "Crime", "Drama"]}},
                     {_id: 0, title: 1, genres: 1}).pretty()

db.data.find({sections : {$all : ["AG1","MD1","OA1"]}},{_id:0, sections:1}).count()
