const https = require('https');
const fSchedule = require('./fishSchedule.js');
const fDetails = require('./fishDetails.js');

/*
    Data gets sourced from Nookipedia.  More info:
    https://nookipedia.com/wiki/Nookipedia:Development
    https://nookipedia.com/wiki/Special:CargoTables/nh_fish
    https://nookipedia.com/w/api.php?action=help&modules=cargoquery
*/
const url  = 'https://nookipedia.com/w/api.php?action=cargoquery&tables=nh_fish&limit=100&fields=name,shadow_size,location,sell_nook,rarity,total_catch,n_m1,n_m2,n_m3,n_m4,n_m5,n_m6,n_m7,n_m8,n_m9,n_m10,n_m11,n_m12,n_m1_time,n_m2_time,n_m3_time,n_m4_time,n_m5_time,n_m6_time,n_m7_time,n_m8_time,n_m9_time,n_m10_time,n_m11_time,n_m12_time&format=json';

https.get(url, (res) => {
    let chunks = [];
    res.on('data', (d) => {
        chunks.push(d);
    }).on('end', function() {
        let data   = Buffer.concat(chunks);

        let fishSchedule = new fSchedule();
        let fishDetails = new fDetails();

        try {
            const query = JSON.parse(data);
            fishes = query.cargoquery;
            fishes.forEach(fish => {
                fishDetails.add(fish.title);
                fishSchedule.add(fish.title);
            });
        } catch (e) {
            console.log('Problem with data response from server');
            console.log(e);
            return;
        }


        fishSchedule.write();
        fishDetails.write();
    });
}).on('error', (e) => {
    console.log('Problem with data request...');
    console.error(e);
});
