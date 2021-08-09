module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'docs',
    },
  };
};
