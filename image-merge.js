// -----------------------------------------------
// 	Required Modules
// -----------------------------------------------
// 
// cli-color: 	 	Utility for terminal output
// gm: 				Image manipulation
// 
// -----------------------------------------------
var clc = require('cli-color');
var gm = require('gm').subClass({imageMagick: true});


// -----------------------------------------------
// 	Set up an increment to know when we've finished processing the templates
// -----------------------------------------------
var increment = 0;


// -----------------------------------------------
// 	Receive an array of templates and build pages based on their assets
// 	@method combine
// 	@param {string[]} templates - templates to be built
// -----------------------------------------------
function combine(templates) {

	templates.forEach(function(template) {
		
		// Set up variables to grab template info
		var templateInitialAsset = template.assets.shift();
		var output = './dist/' + template.name + '.jpg';

		// Build out the landing page
		gm(templateInitialAsset)
		.append(template.assets)
		.write((output), function(error) {

			if(!error) {
				// Count the number of times looped
				increment++;

				// Log the template name being built
				console.log(clc.magenta('Combining: ') + output);

				// After building all templates log that it's done
				if(increment >= templates.length) {
					console.log(clc.green('Done!\n'));
				}
			} else {
				console.log(clc.red('ERROR: ' + error.message));
			}
		});
	});
}


// -----------------------------------------------
//  Export the combine functions 
//  Access using example.combine(templateArray)
// -----------------------------------------------
module.exports.combine = combine;