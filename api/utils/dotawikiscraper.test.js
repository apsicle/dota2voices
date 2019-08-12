const scraper = require('./dotawikiscraper.js');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('wiki scraper', () => {
  it('successfully returns a non-empty object', () => {
    expect.assertions(2);
    return scraper.getHeroResponses('https://dota2.gamepedia.com/Abaddon/Responses').then((data) => {
      expect(data).toBeInstanceOf(Object);
      expect(data.length).toBeGreaterThan(0);
    })
  });
});

describe('wiki dom parser', () => {
  it('successfully returns an object with non-empty mp3src and text properties', () => {
    
  })
})