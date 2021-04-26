const fs = require('fs');

class FishDetails {
    allFish = {};

    addFishDetails(fish) {
        this.allFish[fish.name] = {
            name: fish.name,
            size: fish['shadow size'].toLowerCase()
        };
    }

    writeFishDetails() {
        const data = JSON.stringify(this.allFish);
        fs.writeFile('../src/config/fish.json', data, 'utf8', (err) => {

            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });
    }
}

module.exports = FishDetails;
