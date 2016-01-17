// -----------------------------------------------
// 	Required Modules
// -----------------------------------------------
//
// pageConfig: Configuration for templates
// imageMerge: Combine an array of assets vertically into one image
// 
// -----------------------------------------------
var pageConfig = require('./page-config.js');
var imageMerge = require('./image-merge.js');


// -----------------------------------------------
// 	Pass in the templates to combine
// 	@param {string[]} templates
// -----------------------------------------------
imageMerge.combine(pageConfig.templates);