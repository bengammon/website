# Our Website

Shhh... It's a secret.

## Gulp

[Gulp](http://gulpjs.com/) is the [Node.js](http://nodejs.org/) based command line tool that's used for the Moov2 Website. You will need to ensure that you have [Node JS](http://nodejs.org/download/) and the [Node Package Manager (npm)](https://www.npmjs.org/) installed to fully build this project.

To get started using gulp by installing it globally so that you can use the command from anywhere you will need to execute npm install -g gulp

Then you will need to run npm install in the site directory to get all the required node modules.

## Jekyll

We're using the static HTML site generator [Jekyll](http://jekyllrb.com/) for this project. Jekyll allows us to create a rapid static HTML site while still having the flexibility of the Liquid templating engine with nice features like shared layouts.

The source files that Jekyll uses to build the site are located at /jekyll/src.

To build the Jekyll site you can execute the [Jekyll commands](http://jekyllrb.com/docs/usage/) in the /jekyll directory, alternatively you can use the gulp tasks: 

*	gulp jekyll-watch
	-	builds the site, starts a server at localhhost:4000 and rebuilds whenever the source files (./src) change
	-	includes drafts and blog posts set to future dates
*	gulp jekyll-build
	-	builds the site and puts the output into the dist directory ready for deployment
*	gulp dist
	-	executes the jekyll-build task
	-	should compile js/css and move to jekyll src in future
*	gulp
	-	the default task executed is jekyll-watch
	-	should watch for changes to js/css and move to jekyll src in future

### Jekyll on Windows

Unfortunately Windows isn't officially supported by Jekyll, so there's a few [additional steps](http://chrismeserole.com/coding/install-ruby-rails-jekyll-on-windows/) to get it running. To summarise:

*	Install Ruby and Rails using [Rails Installer](http://railsinstaller.org/) at the default location C:\RailsInstaller
*	Open a command prompt and cd to C:\RailsInstaller
*	gem install jekyll -v 1.4.2
*	gem install rdiscount
*	gem install wdm

From research this seems to be the easiest way to install Jekyll on Windows. Pay extra attention when installing the Jekyll gem that you specify version 1.4.2 as, at the time of writing, there are breaking issues with version 1.4.3 on Windows.