var postcss = require('postcss');

module.exports = postcss.plugin('postcss-print', function (opts) {
    opts = opts || {};

    return function (css) {
        // let's start our new file with @charset "UTF-8"
        var newFile = postcss.parse('@charset "UTF-8"');

        // let's loop through all rules and extract all @media print
        css.eachAtRule(function(rule, i) {
            if (rule.name === 'media' && rule.params === 'print') {
                // let's remove all occurences of @media print from the original css
                if (opts.remove) {
                    rule.removeSelf();
                } else {
                    // let' append all @media print rules to the newFile
                    newFile.append(postcss.parse(rule).toResult().css);
                }
            }
        });

        if (opts.generate) {
            // let's delete the whole original css sheet
            css.removeAll();

            // let's append all the @media print css to our new generated sheet
            css.append(newFile.toResult().css);
        }
    };
});
