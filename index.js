var postcss  = require('postcss');
var fileSave = require('file-save');
var path     = require('path');

module.exports = postcss.plugin('postcss-extract-media', function(opts) {
    return function(css, result) {
        // get fileinfo
        var fileinfo = path.parse(result.opts.to);

        // let's start our new file with @charset "UTF-8" and save file in the same dir appending a prefix
        var newFile = fileSave(fileinfo.dir + '/' + fileinfo.name + opts.prefix + fileinfo.ext, '@charset "UTF-8"');

        // let's loop through all rules and extract all @media print
        css.walkAtRules(function(rule) {
            if (rule.name.match(/^media/) && rule.params.match(opts.match)) {
                // add nodes to print file
                newFile.write(rule.nodes.toString(), 'utf8');

                // TODO: maybe add a option (default true) to remove occurences
                // let's remove all occurences of @media print from the current css
                rule.remove();
            }
        });
        newFile.end();
    };
});
