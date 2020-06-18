const { getQuote } = require('./api.js');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        character: 'Bender',
        quote: '...Martini-drinking contest with the auto-pilot. I would have won, except we ran out of olives.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      }
    });
  }
}));

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        character: 'Bender',
        quote: '...Martini-drinking contest with the auto-pilot. I would have won, except we ran out of olives.',
        image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
      }
    });
  }
}));


describe('futurama api functions', () => {
  it('can get a bender quote', () => {
    return getQuote('bender')
      .then(quote => {
        expect(quote).toEqual({
          character: 'Bender',
          quote: '...Martini-drinking contest with the auto-pilot. I would have won, except we ran out of olives.',
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
      });
  });

  // it('can get many bender quotes', () => {
  //   return getManyQuotes(bender)
  //     .then(quote => {
  //       expect(quote).toEqual([{
  //         body: {
  //           {
  //           character: "Bender",
  //           quote: "Bite my shiny metal ass.",
  //           image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  //           },
  //           {
  //           character: "Bender",
  //           quote: "Everybody's a jerk: you, me, this jerk.",
  //           image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  //           },
  //           {
  //           character: "Bender",
  //           quote: "Of all the friends I've had, you're the first.",
  //           image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  //           },
  //           {
  //           character: "Bender",
  //           quote: "I hate the people that love me, and they hate me.",
  //           image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  //           },
  //           {
  //           character: "Bender",
  //           quote: "That'll take forever. What she ought to do is find a nice guy with two eyes and poke one out.",
  //           image: "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png"
  //           }
  //         }
  //       }]);
  //     });
  // });
});
