# postcss-print

[`PostCSS`](https://github.com/postcss/postcss) plugin to extract all `@media print` from your stylesheets and move it to a `print.css` file

This is alpha stage software to solve some of my specific needs. Jump in the issues section to collaborate if it also solve yours.

## Installation

```shell
npm install postcss-print --save-dev
```


## How to use

### Options

#### `generate` (default: `false`)

This is the option that generates the new print.css file, I use it like this (with Grunt):

```js
generatePrint: {
    options: {
        processors: [
            require('postcss-print')({ generate: true })
        ]
    },
    src  : 'public/css/dist/all.min.css',
    dest : 'public/css/dist/print.css'
}
```

#### `remove` (default: `false`)

This option removes all occurences of `@media print` from your original css files. I use it like this (with Grunt):

```js
removePrint: {
    options: {
        processors: [
            require('postcss-print')({ remove: true })
        ]
    },
    src: 'public/css/dist/*.min.css'
}
```

### Using

Plugin can be used just like any other `PostCSS` plugin. For example, [Gulp](https://github.com/gulpjs/gulp) setup (using [gulp-postcss](https://github.com/w0rm/gulp-postcss)).
Or [Grunt](https://github.com/gruntjs/grunt) setup (using [grunt-postcss](https://github.com/nDmitry/grunt-postcss)):

```js
module.exports = function(grunt) {
    grunt.config('postcss', {
        prefix: {
            options: {
                map  : true,
                diff : true,
                processors: [
                    require('autoprefixer-core')({ browsers: ['> 1%', 'last 1 version', 'ie 8', 'ie 9'] })
                ]
            },
            src: 'public/css/dist/*.css'
        },
        generatePrint: {
            options: {
                processors: [
                    require('postcss-print')({ generate: true })
                ]
            },
            src  : 'public/css/dist/all.min.css',
            dest : 'public/css/dist/print.css'
        },
        removePrint: {
            options: {
                processors: [
                    require('postcss-print')({ remove: true })
                ]
            },
            src: 'public/css/dist/*.min.css'
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
};
```

And then use the print.css like this:

```html
<link rel="stylesheet" href="print.css" media="print">
```

## License
MIT © [Gustavo Siqueira](http://twitter.com/Dr_Gustavo)
