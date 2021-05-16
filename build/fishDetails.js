const fs = require('fs');

class FishDetails {
    allFish = {};

    add(fish) {
        this.allFish[fish.name] = {
            name: fish.name,
            size: fish['shadow size'].toLowerCase(),
            location: fish.location,
            sell: parseInt(fish['sell nook']),
            rarity: fish.rarity,
            catch: parseInt(fish['total catch'])
        };
    }

    write() {
        const data = JSON.stringify(this.allFish);
        fs.writeFile('../src/config/fish.json', data, 'utf8', (err) => {

            if (err) {
                console.log(`Error writing file: ${err}`);
            }
        });
    }
}

module.exports = FishDetails;
