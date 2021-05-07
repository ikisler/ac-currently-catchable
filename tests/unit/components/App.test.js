import App from '@/App.vue'

describe('App.vue', () => {
  it('Moves forward in time when you call nextHour', () => {

    let start = new Date();
    let end = new Date(start.getTime());
    end.setHours(end.getHours() + 1);
    let $this = {
      start: start,
      end: end,
      updateUI: function() {}
    };

    App.methods.nextHour.call($this);
    end.setHours(end.getHours() + 1);
    expect($this.start.getHours()).toBe(end.getHours());
  });
});

describe('App.vue', () => {
  it('Moves backward in time when you call prevHour', () => {

    let start = new Date();
    let copyOfStart = new Date(start.getTime());
    let $this = {
      start: start,
      end: copyOfStart,
      updateUI: function() {}
    };

    App.methods.prevHour.call($this);
    expect($this.start.getHours()).toBe(copyOfStart.getHours() - 3);
  });
});

describe('App.vue', () => {
  it('setHours sets correct time information', () => {

    let timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric' });

    let start = new Date();
    let end = new Date(start.getTime());
    let $this = {
      start: new Date(start.getTime()),
      end: end,
      hours: []
    };

    App.methods.setHours.call($this);
    let currentHour = timeFormat.formatToParts(start.setHours(start.getHours()));
    expect($this.hours[0]).toEqual(currentHour);
    currentHour = timeFormat.formatToParts(start.setHours(start.getHours() + 1));
    expect($this.hours[1]).toEqual(currentHour);
    currentHour = timeFormat.formatToParts(start.setHours(start.getHours() + 1));
    expect($this.hours[2]).toEqual(currentHour);
  });
});

describe('App.vue', () => {
  it('setDisplayDate shows the correct date information', () => {
    let dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric'});

    let start = new Date();
    let $this = {
      start: new Date(start.getTime()),
    };

    App.methods.setDisplayDate.call($this);
    expect($this.currentDate).toEqual(dateFormat.format(start));
  });
});

describe('App.vue', () => {
  it('setDisplayTime shows the correct date information', () => {
    let timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric'});

    let start = new Date();
    let end = new Date(start.getTime());
    let $this = {
      start: new Date(start.getTime()),
      end: end
    };

    App.methods.setDisplayTime.call($this);
    expect($this.currentTime).toEqual(timeFormat.format(start) + ' - ' + timeFormat.format(end));
  });
});
