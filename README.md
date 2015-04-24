# Express and ES6+ (with Babel)

Setup for [Express](http://expressjs.com/) using ES6+ features!

This project uses:

- [Webpack](http://webpack.github.io/) - As a package and loader
- [Babel](https://babeljs.io/) - As a transpiler
- [source-map-support](https://github.com/evanw/node-source-map-support) - For debugging after transpiler the code

## How to use

### Dependencies

After cloning the repository to your local machine, you need to install all dependencies

```
# Cloning the repository
git clone https://github.com/oieduardorabelo/express-es6.git

# Navigate inside the project folder
cd express-es6

# Installing all dependencies
npm install
```

### Development

After install the dependencies, you can run:

```
npm start
```

The previous command will run the **webpack** watcher with **nodemon** on your `_dist/` folder

### Lint your code

To run the [Eslint](http://eslint.org/) in your code, you can run:

```
npm test
```

## TL;DR
Copy the repository, install the dependencies via [npm](https://www.npmjs.com/), and run `npm start`

## License

MIT: [http://eduardorabelo.mit-license.org/](http://eduardorabelo.mit-license.org/)
