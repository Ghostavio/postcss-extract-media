var postcss  = require('postcss');
var fileSave = require('file-save');
var path     = require('path');

module.exports = postcss.plugin('postcss-extract-media', function(opts) {
    return function(css, result) {
        // get fileinfo
        var fileinfo = path.parse(result.opts.to);

        // create a new file
        var newFile = fileSave(fileinfo.dir + '/' + fileinfo.name + opts.prefix + fileinfo.ext);

        // create new css to write on new file
        var newCss = postcss.parse('@charset "UTF-8"');

         //let's loop through all rules and extract all @media print
        css.walkAtRules(function(rule) {
            if (rule.name.match(/^media/) && rule.params.match(opts.match)) {
                // add the rule to the new css
                newCss.append(rule);

                // TODO: maybe add a option (default true) to remove occurences
                // let's remove all occurences of @media print from the current css
                rule.remove();
            }
        });

        // write final css with extracted to new file
        newFile.write(newCss.toString()).end();
    };
});
