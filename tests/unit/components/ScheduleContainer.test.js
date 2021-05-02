import { shallowMount } from '@vue/test-utils'
import ScheduleContainer from '@/components/ScheduleContainer.vue'

const month = 0;
const allFish = {
  'Fish 1': {
    'size': 'medium',
    'name': 'Fish 1'
  },
  'Fish 2': {
    'size': 'large',
    'name': 'Fish 2'
  },
  'Fish 3': {
    'size': 'large w/fin',
    'name': 'Fish 3'
  },
  'Fish 4': {
    'size': 'tiny',
    'name': 'Fish 4'
  },
  'Fish 5': {
    'size': 'tiny',
    'name': 'Fish 5'
  }
};
const fishSchedule = {
  '0': {
    allDay: ['Fish 1'],
    '4pm': ['Fish 2'],
    '9pm': ['Fish 3'],
    '4am': ['Fish 4'],
    '9am': ['Fish 5']
  }
};

const fishImageMap = {
  'medium': {
    source: 'images/fish.svg',
    alt: 'Medium fish',
    class: 'fish-med'
  },
  'large': {
    source: 'images/fish.svg',
    alt: 'Large fish',
    class: 'fish-large'
  },
  'large w/fin': {
    source: 'images/fin-fish.svg',
    alt: 'Large with fin fish',
    class: 'fish-large'
  },
  'tiny': {
    source: 'images/fish.svg',
    alt: 'Tiny fish',
    class: 'fish-tiny'
  },
};

describe('ScheduleContainer.vue', () => {
  it('Renders the correct fish for after 4pm & 9pm', () => {
    const hours = [
      [{value: 10}, '', '', '', {value: 'PM'}],
    ];

    const wrapper = shallowMount(ScheduleContainer, {
      props: { hours, month, allFish, fishSchedule, fishImageMap }
    });

    const hourName = wrapper.get('.hour-name');
    expect(hourName.text()).toMatch(hours[0][0].value + ' ' + hours[0][4].value);

    const fishes = wrapper.findAll('.fish');

    // Should have three fish -- after 4pm, after 9pm, and all day fish
    expect(fishes.length).toBe(3);

    // These fish should be in the container
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 1)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 2)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 3)/);
  });
});

describe('ScheduleContainer.vue', () => {
  it('Renders the correct fish for after 3pm', () => {
    const hours = [
      [{value: 3}, '', '', '', {value: 'PM'}],
    ];

    const wrapper = shallowMount(ScheduleContainer, {
      props: { hours, month, allFish, fishSchedule, fishImageMap }
    });

    const hourName = wrapper.get('.hour-name');
    expect(hourName.text()).toMatch(hours[0][0].value + ' ' + hours[0][4].value);

    const fishes = wrapper.findAll('.fish');

    // Should have three fish -- after 4am, after 9am, and all day fish
    expect(fishes.length).toBe(3);

    // These fish should be in the container
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 1)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 4)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 5)/);
  });
});

describe('ScheduleContainer.vue', () => {
  it('Renders the correct fish for after 3am', () => {
    const hours = [
      [{value: 3}, '', '', '', {value: 'AM'}],
    ];

    const wrapper = shallowMount(ScheduleContainer, {
      props: { hours, month, allFish, fishSchedule, fishImageMap }
    });

    const hourName = wrapper.get('.hour-name');
    expect(hourName.text()).toMatch(hours[0][0].value + ' ' + hours[0][4].value);

    const fishes = wrapper.findAll('.fish');

    // Should have three fish -- after 9pm, after 4pm, and all day fish
    expect(fishes.length).toBe(3);

    // These fish should be in the container
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 1)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 2)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 3)/);
  });
});

describe('ScheduleContainer.vue', () => {
  it('Renders the correct fish for after 5am', () => {
    const hours = [
      [{value: 5}, '', '', '', {value: 'AM'}],
    ];

    const wrapper = shallowMount(ScheduleContainer, {
      props: { hours, month, allFish, fishSchedule, fishImageMap }
    });

    const hourName = wrapper.get('.hour-name');
    expect(hourName.text()).toMatch(hours[0][0].value + ' ' + hours[0][4].value);

    const fishes = wrapper.findAll('.fish');

    // Should have three fish -- after 9pm, after 4am, and all day fish
    expect(fishes.length).toBe(3);

    // These fish should be in the container
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 1)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 2)/);
    expect(wrapper.get('.fish-container').text()).toMatch(/(Fish 4)/);
  });
});
