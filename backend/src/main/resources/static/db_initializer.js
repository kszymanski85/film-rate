// mongeez formatted javascript

// changeset initChange:ch-1
var films = [
    {_id:1, "title":"Some book", "releaseDate": "11-05-2005", "type": "A", "rate": [5,2,6,7,4,5,6,3,5,6,2,4,5]},
    {_id:2, "title":"Nice", "releaseDate": "22-07-2011", "type": "B", "rate": [5,6,2,1,3,4,5,7,3,8,9,9,6,5]},
    {_id:3, "title":"Africa", "releaseDate": "12-04-2011", "type": "B", "rate": [5,5,6,5,5,5,6,7,8,3,4,5,6]},
    {_id:4, "title":"Some other", "releaseDate": "02-04-2007", "type": "C", "rate": [7,7,7,6,5,4,5,6,7,8,8,8]},
    {_id:5, "title":"Bla bla bla", "releaseDate": "30-01-1996", "type": "A", "rate": [7,6,5,4,4,4,5,6,7,2,3,4,6,3,1,8]},
    {_id:6, "title":"Dont wath", "releaseDate": "30-01-1996", "type": "A", "rate": [7,6,5,4,4,4,5,6,7,2,3,4,6,3,1,8]},
    {_id:7, "title":"King Kong", "releaseDate": "23-02-2018", "type": "A", "rate": []},
    {_id:8, "title":"Scarry", "releaseDate": "14-06-1999", "type": "A", "rate": [7,5,3,4,5,5,1,2,2,2,4]},
    {_id:9, "title":"Other Place", "releaseDate": "15-06-2008", "type": "C", "rate": [8,8,8,4,5,3,2,1,2]},
    {_id:10, "title":"Spider-Man", "releaseDate": "03-08-2016", "type": "B", "rate": [7,5,6,4,5,5,4,1,2,4,5,6]},
    {_id:11, "title":"Batman", "releaseDate": "25-08-2015", "type": "B", "rate": [7,5,7,6,6,5,4,6,5,6,7,5,8]},
    {_id:12, "title":"Nice guys", "releaseDate": "21-12-2001", "type": "C", "rate": [6,6,6,5,4,5,6,7,6,5,6]},
    {_id:13, "title":"Omman", "releaseDate": "03-11-2012", "type": "B", "rate": [6,4,5,6,5,4,5,6,7,4,5,6,8]},
    {_id:14, "title":"Dymmy movie", "releaseDate": "17-11-2012", "type": "A", "rate": [5,5,4,4,4,3,4,5,5,6,7,4,4,3,2]},
    {_id:15, "title":"Speed", "releaseDate": "17-11-2008", "type": "C", "rate": [7,7,5,4,3,4,5,5,6,4,3,2]},
    {_id:16, "title":"Funny Race", "releaseDate": "12-09-2018", "type": "C", "rate": [4,4,5,5,5,5,4,3,4,5,4,3,5]},
    {_id:17, "title":"Rene", "releaseDate": "03-10-2018", "type": "C", "rate": [4,5,3,4,5]},
    {_id:18, "title":"Alice and Rabbit", "releaseDate": "03-10-2018", "type": "C", "rate": []},
    {_id:19, "title":"Toast", "releaseDate": "23-11-2015", "type": "A", "rate": [5,6,6,4,5,6,3,4,5,6]},
    {_id:20, "title":"Terranove", "releaseDate": "24-03-2001", "type": "B", "rate": [5,4,3,2,6,7,5,4,3,4,5,6,4,4,4,3,6,6,9,9,7]}
    ];

db.film.insert(films);
