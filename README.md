# Dota 2 soundboard

https://dota-soundboard.herokuapp.com/

Mostly for myself:

Architecture is express app serving a bundled create-react-app deployed on heroku.

The bulk of the code I wrote was in the React app. There were a few sticking points: I needed hero portraits and mp3 source files for each of the heroes. The hero portraits are hosted by me (117 heroes x 2 sizes of portraits) image files on a Google Cloud Storage bucket, and the mp3s are hotlinked to the dota 2 wiki on Gamepedia. I wrote a manifest https://docs.google.com/spreadsheets/d/1G83-KupfhYnQlnV1yDEGJs55fNkjgrHclsYLQwFipS8/edit#gid=795565220 and included it as a json string in my bundle in order to dynamically link each of the heroes with their hero portraits and pages on the wiki. I needed to scrape the hero responses page for each hero to generate the mp3 links, but I'm blocked by making a CORS request to the wiki. To overcome making a CORS request from the React app, I wrote a simple route on my express app to make the request as a proxy for my React app. I just ping that api endpoint to get the mp3 links into my React app that way. With the links and hero portraits, I can now generate a soundboard page for each of the heroes. Lastly, as a UX thing, I wanted to try to recreate some of the search feature in the hero pick screen in Dota 2, so I did this by making a transparent search modal component. Try typing out hero names and the search modal will appear.
