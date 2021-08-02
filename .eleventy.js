module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(['css', 'njk']);
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
  };
};
