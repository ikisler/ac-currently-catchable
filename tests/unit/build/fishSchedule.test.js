import fishSchedule from '../../../build/fishSchedule.js'
import fs from 'fs';

describe('fishSchedule.js', () => {
  it('Should add fish details', () => {
    let fishS = new fishSchedule();
    let fish = {
      name: 'New fish',
      'n m1': 1,
      'n m2': 1,
      'n m3': 1,
      'n m4': 1,
      'n m5': 1,
      'n m6': 0,
      'n m7': 0,
      'n m8': 0,
      'n m9': 0,
      'n m10': 0,
      'n m11': 0,
      'n m12': 0,
      'n m1 time': 'All day',
      'n m2 time': '4 PM',
      'n m3 time': '9 PM',
      'n m4 time': '4 AM',
      'n m5 time': '9 AM'
    };
    let expected = JSON.parse(JSON.stringify(fishS.schedule)); // capture the empty schedule first

    expected[0]['allDay'] = [fish.name];
    expected[1]['4pm'] = [fish.name];
    expected[2]['9pm'] = [fish.name];
    expected[3]['4am'] = [fish.name];
    expected[4]['9am'] = [fish.name];

    fishS.add(fish);
    expect(fishS.schedule).toEqual(expected);
  });
});

jest.mock('fs');

let fishS;
describe('fishSchedule.js', () => {
  beforeAll(() => {
    // clear any previous calls
    fs.writeFile.mockClear();

    fishS = new fishSchedule();
    fishS.write();
  });

  it('Should have called 3 times', () => {
    expect(fs.writeFile).toHaveBeenCalledTimes(1);
  });

  it('Should have called with...', () => {
    expect(fs.writeFile).toHaveBeenCalledWith(
      expect.anything(),
      JSON.stringify(fishS.schedule),
      expect.anything(),
      expect.anything()
    );
  });
});
