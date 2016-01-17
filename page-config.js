// -----------------------------------------------
// List of Pages to Build
// -----------------------------------------------

var templates = [

    // Example Page Build
    // examplePage = {
    //     'name': 'this will be the name of the exported file',
    //     'assets': [
    //         './assets/globals/this-is-a-global-asset.jpg',
    //         './assets/home-page/this-is-a-page-specific-asset.jpg'
    //     ] 
    // }
    
    // Home Page
    homePage = {
        'name': 'example-home-page',
        'assets': [
            './assets/example/globals/header.jpg',
            './assets/example/home-page/hero.jpg',
            './assets/example/home-page/services.jpg',
            './assets/example/globals/cta.jpg',
            './assets/example/home-page/projects.jpg',
            './assets/example/globals/footer.jpg'
        ]
    },

    // About Page
    aboutPage = {
        'name': 'example-about-page',
        'assets': [
            './assets/example/globals/header.jpg',
            './assets/example/about-page/hero.jpg',
            './assets/example/about-page/culture.jpg',
            './assets/example/globals/cta.jpg',
            './assets/example/about-page/clients.jpg',
            './assets/example/globals/footer.jpg'
        ]
    }
];


// -----------------------------------------------
//  Export the Templates array to be accessed
//  Access using example.templates
// -----------------------------------------------
module.exports.templates = templates;
