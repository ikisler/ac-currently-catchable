const fs = require('fs');

let schedule = {
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
let allFish = {};

let monthMappings = {
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

function addFishSchedule(fish) {
    for (const nookipediaM in monthMappings) {
        if (fish[nookipediaM] == 1) {
            if (fish[nookipediaM + ' time'] == "All day") {
                schedule[monthMappings[nookipediaM]].allDay.push(fish.name);
            } else if (fish[nookipediaM + ' time'].startsWith('4 PM')) {
                schedule[monthMappings[nookipediaM]]['4pm'].push(fish.name);
            } else if (fish[nookipediaM + ' time'].startsWith('9 PM')) {
                schedule[monthMappings[nookipediaM]]['9pm'].push(fish.name);
            } else if (fish[nookipediaM + ' time'].startsWith('4 AM')) {
                schedule[monthMappings[nookipediaM]]['4am'].push(fish.name);
            } else if (fish[nookipediaM + ' time'].startsWith('9 AM')) {
                schedule[monthMappings[nookipediaM]]['9am'].push(fish.name);
            }
        }
    }
}

function writeFishSchedule() {
    const data = JSON.stringify(schedule);
    fs.writeFile('../src/config/fishSchedule.json', data, 'utf8', (err) => {

        if (err) {
            console.log(`Error writing file: ${err}`);
        }
    });
}

function addFishDetails(fish) {
    allFish[fish.name] = {
        name: fish.name,
        size: fish['shadow size'].toLowerCase()
    };
}

function writeFishDetails() {
    const data = JSON.stringify(allFish);
    fs.writeFile('../src/config/fish.json', data, 'utf8', (err) => {

        if (err) {
            console.log(`Error writing file: ${err}`);
        }
    });
}


fs.readFile('./test.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error -- cannot open file");
    } else {
        const query = JSON.parse(data);
        fishes = query.cargoquery;

        fishes.forEach(fish => {
            addFishDetails(fish.title);
            addFishSchedule(fish.title);
        });

        writeFishSchedule();
        writeFishDetails();
    }
});
