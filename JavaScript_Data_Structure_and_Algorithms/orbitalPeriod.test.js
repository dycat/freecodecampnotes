const {orbitalPeriod} = require('./orbitalPeriod');

test('test orbital period', () => {
    expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
        .toEqual([{name: "sputnik", orbitalPeriod: 86400}]) 

})