# AC Currently Catchable
AC Currently Catchable is a Vue.js app showing currently catchable fish for Nintendo's Animal Crossing: New Horizons game.

![Screenshot of project](https://user-images.githubusercontent.com/12506147/116965195-12603700-ac62-11eb-8203-a247e4cd1f1f.png)

Fish in Animal Crossing have limited times of the day that they are available.  With five different time spans to keep track of, it can be difficult to know if any fish you'd like to catch are available without putting in the effort to look it up.

This project was created to simplify the presentation of fish availability data in the game to make it easier to determine what you could be fishing up at any given time, or if you'd like to turn on the game in order to search for a specific fish.

Data is sourced from [Nookipedia](https://nookipedia.com) -- stored locally to avoid overloading their servers.

## Running Locally
### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Lints and fixes files
```
npm run lint
```

#### Run tests
```
npm run test:unit
```

#### Build JSON config files
```
cd build
node buildFish.js
```

### Deployment
#### Compiles and minifies for production
```
npm run build
```
