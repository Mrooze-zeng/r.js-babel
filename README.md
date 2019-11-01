# r.js-babel(fork from r.js)
Integrate Babel into [r.js](https://github.com/requirejs/r.js.git) which is a command line tool for running JavaScript that use the Asynchronous Module Definition API(AMD) for declaring and using JavaScript modules and regular JavaScript script files.

## [Read more detail about r.js](https://github.com/requirejs/r.js.git)
- The repository is just a copy of the official r.js and adds babel support.


## How to use
```
yarn add r.js-babel / npm i r.js-babel
```

- Just add one more option "babel" which is your babel config to your config file.
- For example:
 
```
{
  appDir:"../www",
  mainConfigFile:"../www/app.js",
  dir:"../www-dist",
  optimizeCss: 'none',
  optimize: 'uglify2',
  babel:{
    "presets": [
      [
        "@babel/preset-env",
      ]
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      [
        "@babel/plugin-proposal-optional-chaining"
      ]
    ]
  },
  preserveLicenseComments: false,
  optimizeAllPluginResources: true,
  skipDirOptimize: false,
  removeCombined: false,
  findNestedDependencies: true,
  generateSourceMaps: false,
  uglify2: {
      output: {
          beautify: false
      },
      compress: {
          sequences: false,
          global_defs: {
              DEBUG: false
          }
      },
      warnings: false,
      mangle: false,
  },
  modules:[
    {
      name:"app"
    }
  ]
}
```
