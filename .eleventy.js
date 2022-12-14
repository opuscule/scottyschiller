const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/images');
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_SHORT);
	})
	
	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
}