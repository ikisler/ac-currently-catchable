import { mount } from '@vue/test-utils'
import FishContainer from '@/components/FishContainer.vue'

const allFish = {
  'Fish 1': {
    'size': 'medium',
    'name': 'Fish 1',
    'sell': 100,
    'location': 'river',
    'rarity': '',
    'catch': 0
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

describe('FishContainer.vue', () => {
  it('Renders the correct fish info', () => {
    const fish = allFish['Fish 1'];
    const wrapper = mount(FishContainer, {
      props: { fish, fishImageMap }
    });

    const name = wrapper.find('.fish span');
    expect(name.text()).toMatch(/(Fish 1)/);

    const image = wrapper.find('img');
    expect(image.attributes('class')).toBe(fishImageMap[fish.size].class);

    expect(wrapper.find('.details-backdrop').isVisible()).toBe(false);
  });
});

describe('FishContainer.vue', () => {
  it('Shows the dialog when you click on it', async () => {
    const fish = allFish['Fish 1'];
    const wrapper = mount(FishContainer, {
      props: { fish, fishImageMap }
    });

    expect(wrapper.find('.details-backdrop').isVisible()).toBe(false);
    await wrapper.get('.fish').trigger('click');
    expect(wrapper.find('.details-backdrop').isVisible()).toBe(true);
  });
});

describe('FishContainer.vue', () => {
  it('Closes the dialog when getting the close event', async () => {
    const fish = allFish['Fish 1'];
    const wrapper = mount(FishContainer, {
      props: { fish, fishImageMap }
    });

    expect(wrapper.find('.details-backdrop').isVisible()).toBe(false);
    await wrapper.get('.fish').trigger('click');
    expect(wrapper.find('.details-backdrop').isVisible()).toBe(true);

    await wrapper.get('.details-backdrop').trigger('click');
    expect(wrapper.find('.details-backdrop').isVisible()).toBe(false);
  });
});
