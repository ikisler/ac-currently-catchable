# AC Currently Catchable
AC Currently Catchable is a Vue.js app showing currently catachable fish for Nintendo's Animal Crossing: New Horizons game.

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
