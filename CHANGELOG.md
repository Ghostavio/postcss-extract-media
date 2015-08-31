# 0.0.1

The first release. Don't use it.

# 0.0.2

Yay, now it's a little bit more stable.

**Changes on this version are not backwards compatible with the previous version, but I'm still not comfortable changing it to 1.0.0 because I don't believe it's already at that stage. Sorry for breaking semantic versioning.**

- Changed a the workflow of the app ([PR #8](https://github.com/Ghostavio/postcss-extract-media/pull/8));
- Changed the name of the plugin to *postcss-extract-media* (Closes [#5](https://github.com/Ghostavio/postcss-extract-media/issues/5));
- Use PostCSS 5.0 API (Closes [#2](https://github.com/Ghostavio/postcss-extract-media/issues/2));
- Writing file from within the plugin now, so no need to `append` leaving all the work for Grunt as it was happening before (Closes [#3](https://github.com/Ghostavio/postcss-extract-media/issues/3));

There are still work to be done here, but it's way better than the first version.
Thanks to [@davidecantoni](https://github.com/davidecantoni/), [@ai](https://github.com/ai/) and [@joaocunha](https://github.com/joaocunha/) for the help.

# 0.0.3

Typo on postcss API call (`walksAtRules` instead of `walkAtRules`). So previous version is completely broken, use this one instead.

# 0.0.4

Apparently there was a problem with the way we're writing the new file, it should be fixed now.

# 0.0.5

Switched back to `file-save`@0.2.0. Waiting for this [PR](https://github.com/chilijung/file-save-stream/pull/4) to be merged.
