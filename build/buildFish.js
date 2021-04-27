const fs = require('fs');
const fSchedule = require('./fishSchedule.js');
const fDetails = require('./fishDetails.js');

fs.readFile('./test.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error -- cannot open file");
    } else {
        let fishSchedule = new fSchedule();
        let fishDetails = new fDetails();

        const query = JSON.parse(data);
        fishes = query.cargoquery;

        fishes.forEach(fish => {
            fishDetails.add(fish.title);
            fishSchedule.add(fish.title);
        });

        fishSchedule.write();
        fishDetails.write();
    }
});
