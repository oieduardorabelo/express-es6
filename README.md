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

##### 1) Long version

After this process, you just need to set [Webpack](http://webpack.github.io/) to watch yours files with a nice and easy command:

```
webpack --watch
```

***Just check the [Webpack documentation](http://webpack.github.io/docs/) for more infos and flags***

The previous command with *watch* your `es6/app.js` and generate the compiled file `_dist/app.output.js`

Now, you can star your app using [Node.js](https://nodejs.org/):

```
node _dist/app.output.js
```

##### 2) Short version

If you have [Nodemon](https://github.com/remy/nodemon) installed in your machine, just run:

```
npm start
```

The previous command will run the **webpack** watcher with **nodemon** on your `_dist/` folder

## TL;DR
Copy the repository, install the dependencies via [npm](https://www.npmjs.com/), start [webpack](http://webpack.github.io/) with the watch command and run your server with `node _dist/app.output.js`

## License

MIT: [http://eduardorabelo.mit-license.org/](http://eduardorabelo.mit-license.org/)
