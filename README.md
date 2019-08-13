# Dota 2 soundboard

https://dota-soundboard.herokuapp.com/

Mostly for myself:

Architecture is express app serving a bundled create-react-app deployed on heroku.

The bulk of the code I wrote was in the React app. There were a few sticking points: I needed hero portraits and mp3 source files for each of the heroes. The hero portraits are hosted by me (117 heroes x 2 sizes of portraits) image files on a Google Cloud Storage bucket, and the mp3s are hotlinked to the dota 2 wiki on Gamepedia. I wrote a manifest https://docs.google.com/spreadsheets/d/1G83-KupfhYnQlnV1yDEGJs55fNkjgrHclsYLQwFipS8/edit#gid=795565220 and included it as a json string in my bundle in order to dynamically link each of the heroes with their hero portraits and mp3 src files. To overcome making a CORS request from the React app, I wrote a simple route on my express app to make the request as a proxy for my React app. I just ping that api endpoint to get the mp3 links in my React app.
