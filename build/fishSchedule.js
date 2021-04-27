const fs = require('fs');

class FishSchedule {
    schedule = {
        0: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        1: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        2: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        3: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        4: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        5: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        6: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        7: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        8: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        9: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        10: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        },
        11: {
            "allDay": [],
            "4pm": [],
            "9pm": [],
            "4am": [],
            "9am": []
        }
    };

    monthMappings = {
        "n m1": 0,
        "n m2": 1,
        "n m3": 2,
        "n m4": 3,
        "n m5": 4,
        "n m6": 5,
        "n m7": 6,
        "n m8": 7,
        "n m9": 8,
        "n m10": 9,
        "n m11": 10,
        "n m12": 11,
    };

    add(fish) {
        for (const nookipediaM in this.monthMappings) {
            if (fish[nookipediaM] == 1) {
                if (fish[nookipediaM + ' time'] == "All day") {
                    this.schedule[this.monthMappings[nookipediaM]].allDay.push(fish.name);
                } else if (fish[nookipediaM + ' time'].startsWith('4 PM')) {
                    this.schedule[this.monthMappings[nookipediaM]]['4pm'].push(fish.name);
                } else if (fish[nookipediaM + ' time'].startsWith('9 PM')) {
                    this.schedule[this.monthMappings[nookipediaM]]['9pm'].push(fish.name);
                } else if (fish[nookipediaM + ' time'].startsWith('4 AM')) {
                    this.schedule[this.monthMappings[nookipediaM]]['4am'].push(fish.name);
                } else if (fish[nookipediaM + ' time'].startsWith('9 AM')) {
                    this.schedule[this.monthMappings[nookipediaM]]['9am'].push(fish.name);
                }
            }
        }
    }

    write() {
        const data = JSON.stringify(this.schedule);
        fs.writeFile('../src/config/fishSchedule.json', data, 'utf8', (err) => {

            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });
    }
}

module.exports = FishSchedule;
