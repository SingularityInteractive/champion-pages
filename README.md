## Champion Pages
Simple web apps built in [React](http://facebook.github.io/react/) for Gloo.

### Installation

**dependencies**
- node
- npm


Install the needed dependencies
```
npm install
```


Run the development server with auto restart
```
npm start
```

### Build Tasks

These pages use gulp for their build process.

**available tasks**

Watches for changes to css and js and live reloads browser
```
gulp watch
```
Builds css and live reloads browser
```
gulp sass
```
Creates main bundle ( using webpack )
```
gulp bundle
```
