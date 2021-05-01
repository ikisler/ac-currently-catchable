import { shallowMount } from '@vue/test-utils'
import DateContainer from '@/components/DateHeaderContainer.vue'

describe('DateHeaderContainer.vue', () => {
  it('Renders props.date and prop.time when passed', () => {
    const date = 'April 30th';
    const time = '12:34 AM';
    const wrapper = shallowMount(DateContainer, {
      props: { date, time }
    })
    expect(wrapper.text()).toMatch(date + time)
  })
})
