# postcss-split (this could be the new name)

[`PostCSS`](https://github.com/postcss/postcss) plugin to extract `@media` queries from your stylesheets and move it to a `separate.css` file

This is alpha stage software to solve some of my specific needs. Jump in the issues section to collaborate if it also solve yours.

## Installation

```shell
npm install postcss-print --save-dev
```


## How to use

### Options

#### `match`

This is the match for the media query:

```js
'^print'
'screen and (max-width: 300px)'
```

#### `prefix`

This prefix will be appended to the filename:

```js
'-print' => main.css will be saved as main-print.css
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
                    require('autoprefixer-core')({ browsers: ['> 1%', 'last 1 version', 'ie 8', 'ie 9'] }),
                    require('postcss-print')({match: '^print', prefix: '-print'}),
                    require('postcss-print')({match: '(min-width: 568px)', prefix: '-tablet'})
                ]
            },
            src: 'public/css/dist/*.css'
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
};
```

And then use the print.css like this:

```html
<link rel="stylesheet" href="main-print.css" media="print">
```

## License
MIT © [Gustavo Siqueira](http://twitter.com/Dr_Gustavo)
