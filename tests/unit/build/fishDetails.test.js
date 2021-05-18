import fishDetails from '../../../build/fishDetails.js'
import fs from 'fs';

describe('fishDetails.js', () => {
  it('Should add fish details', () => {
    let fd = new fishDetails();
    let fish = { name: 'New fish', 'shadow size': 'Mediumish', location: 'River', 'sell nook': '200', rarity: '', 'total catch': '0'};
    fd.add(fish);
    const expected = {};
    expected[fish.name] = {
        name: fish.name,
        size: fish['shadow size'].toLowerCase(),
        location: fish.location,
        sell: parseInt(fish['sell nook']),
        rarity: fish.rarity,
        catch: parseInt(fish['total catch'])
    };
    expect(fd.allFish).toEqual(expected);
  });
});

jest.mock('fs');

let fd;
describe('fishDetails.js', () => {
  beforeAll(() => {
    // clear any previous calls
    fs.writeFile.mockClear();

    fd = new fishDetails();
    let fish = { name: 'New fish', 'shadow size': 'Mediumish'};
    fd.add(fish);
    fd.write();
  });

  it('Should have called 3 times', () => {
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
  });

  it('Should have called with...', () => {
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.anything(),
      JSON.stringify(fd.allFish),
      expect.anything(),
      expect.anything()
    );
  });
});
