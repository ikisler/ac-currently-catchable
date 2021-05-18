import { shallowMount } from '@vue/test-utils'
import FishDetailsContainer from '@/components/FishDetailsContainer.vue'

const allFish = {
  'Fish 1': {
    'size': 'medium',
    'name': 'Fish 1',
    'sell': 100,
    'location': 'river',
    'rarity': 'rare',
    'catch': 55
  },
  'Fish 2': {
    'size': 'medium',
    'name': 'Fish 1',
    'sell': 100,
    'location': 'river',
    'rarity': '',
    'catch': 0
  }
};

describe('FishDetailsContainer.vue', () => {
  it('Shows the correct fish data', async () => {
    const fishDetails = allFish['Fish 1'];
    const wrapper = shallowMount(FishDetailsContainer, {
      props: { fishDetails }
    });

    expect(wrapper.find('#detailsTitle').text()).toBe(fishDetails.name);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(Medium)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(100)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(river)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(rare)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(55)/);
  });
});

describe('FishDetailsContainer.vue', () => {
  it('Shows the correct fish data when no rarity or catches required', async () => {
    const fishDetails = allFish['Fish 2'];
    const wrapper = shallowMount(FishDetailsContainer, {
      props: { fishDetails }
    });

    expect(wrapper.find('#detailsTitle').text()).toBe(fishDetails.name);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(Medium)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(100)/);
    expect(wrapper.find('#detailsDescription').text()).toMatch(/(river)/);
    expect(wrapper.find('#detailsDescription').text()).not.toMatch(/(rare)/);
    expect(wrapper.find('#detailsDescription').text()).not.toMatch(/(55)/);
  });
});
