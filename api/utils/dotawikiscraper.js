const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function getAllHeroNames(elem) {
  /* Used manually from browser to retrieve urls from dota2wiki */
  let arr = Array.from(elem.children);
  let names = arr.map((el) => {
    return el.href;
  })
}

function scrapeResponse(dom) {
  /* Given a JSDOM dom object, returns an array of objects with text & mp3src properties, e.g.:
  { text: "Chosen of Avernus", mp3src: "https://gamepedia.cursecdn.com/dota2_gamepedia/5/5f/Abad_move_05.mp3"} */
  try {
    let all = dom.window.document.querySelectorAll('audio.ext-audiobutton');
    let arr = Array.from(all);
      let out = arr.map((el, ind) => {
      return { mp3src: el.firstChild.src, text: el.nextSibling.nextSibling.textContent.trim() };
    });
  
    return out;
  } catch(error) {
    return error;
  }
}

function getHeroResponses(url) {
  /* Given a url to the voice responses page of a hero on the wiki, returns a promise to 
  return an array of hero responses via scrapeResponse() */
  return axios.get(url).then((response) => {
    let page = new JSDOM(response.data);
    return scrapeResponse(page);
  }).catch((err) => {
    console.log(err);
  });
}

function getAllHeroResponses() {

}

module.exports = { getAllHeroResponses, getHeroResponses };