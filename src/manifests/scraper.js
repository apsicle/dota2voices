
fetch('https://dota2.gamepedia.com/Abaddon/Responses').then((response)=> {
  return response.json();
}).then((json) => {
  console.log(json);
});

axios.get('https://dota2.gamepedia.com/Abaddon/Responses').then((response) => {
  t = response.data;
});

function getHeroResponses(heroname) {
  
  all = document.querySelectorAll('audio.ext-audiobutton');
  arr = Array.from(all);
  out = t.map((el, ind) => {
    return { mp3src: el.firstChild.src, txt: el.nextSibling.nextSibling.textContent };
  });

  return out;
}
