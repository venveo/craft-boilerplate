const mix = require('laravel-mix')
const Handlebars = require('handlebars')
const path =  require('path')
const mkdirp = require('mkdirp');
const fs = require('fs')

class mixHandlebars {

    register( options = {} ) {
        /**
         * Options { partialsDir, pagesDir, layoutsDir, outputDir }
         */
        this.layoutsDir = options.layoutsDir
        this.partialsDir = options.partialsDir
        this.pagesDir = options.pagesDir
        this.distDir = options.distDir

        // Check for required Object Option property
        this.checkAllRequirements()
        // Registering all partials in `this.partialsDir`
        this.registerPartials(this.partialsDir)
        // Compile and render all html pages
        this.compileTemplates(this.pagesDir)
    }

    dependencies() {
        return ['handlebars']
    }

    /**
     * Check all requirements
     */
    checkAllRequirements() {
        this.checkLayouts()
        this.checkDist()
    }

    /**
     * Check if base layouts `default.hbs` if configured properly
     */
    checkLayouts() {
        (this.layoutsDir === undefined || this.layoutsDir === '' || this.layoutsDir === ' ' ) ? this.onErrorExit('You must set option `{layoutsDir}` property. The base layout of your html structure.') : ''
        // Check if layouts named properly to `default`
        this.filterHbsFiles(this.layoutsDir).forEach(layoutsFile => {
            ( this.removeExtension(layoutsFile) !== 'default' ) ? this.errorExit('You must have a base layout named "default.hbs" inside "'+this.layoutsDir+'/"') : ''
        })
    }

    /**
     * Check if `this.distDir` if configured properly
     */
    checkDist() {
        (this.distDir === undefined || this.distDir === '' || this.distDir === ' ' ) ? this.onErrorExit('You must set option `{distDir}` property to output all compiled html pages') : ''
    }

    /**
     *  Display error message and exit
     *
     *  @param {string} err Error message
     *
     */
    onErrorExit(err) {
        console.log('\x1b[41m%s\x1b[0m', err)
        process.exit()
    }

    /**
     * Remove file extension
     *
     * @param {string} basename file
     *
     */
    removeExtension(file) {
        return file = file.replace(/\.[^/.]+$/, '')
    }

    /**
     * Read single `.hbs` template
     *
     * @param {string} src Path of .hbs file
     *
     */
    readFileContent(src) {
        let fileContent = fs.readFileSync(src, 'utf8')
        return fileContent
    }

    /**
     * Return all `.hbs` basename files in array
     *
     * @param {string} pathDir root Path
     *
     */
    filterHbsFiles(pathDir) {
        let hbsFile = []
        fs.readdirSync(pathDir).forEach(file => {
            // filter `.hbs` files
            if ( path.extname(file) === '.hbs' ) {
                // store partial file w the extension(.hbs)
                hbsFile.push(file)
            }
        })
        return hbsFile
    }

    /**
     * Return converted filename to page title format
     *
     * @param {string} file basename file title
     *
     */
    pageTitle(file) {
        let pageTitle = ( this.removeExtension(file) === 'index' ) ? file = 'Homepage' : this.removeExtension(file)
        // remove dashes and underscores
        pageTitle = pageTitle.replace(/[_-]/g, ' ')
        // Updatecase first letter
        pageTitle = pageTitle.replace(/\b\w/g, l => l.toUpperCase())

        return pageTitle
    }

    /**
     * Registering `{{> body}}` partial
     *
     * @param {string} pageHtml page html context
     *
     */
    registerPagePartial(pageHtml) {
        Handlebars.registerPartial('body', pageHtml)
    }

    /**
     * Register all `.hbs` partials in root Path using handlebars registerPartial method
     *
     * @param {string} pathDir root Path
     *
     */
    registerPartials(pathDir) {
        this.filterHbsFiles(pathDir).forEach(partialFile => {
            let src = pathDir+'/'+partialFile
            Handlebars.registerPartial(this.removeExtension(partialFile), this.readFileContent(src))
        })
    }

    /**
     * Compile a `.hbs` file using Handlebars compile method
     *
     * @param {string} pathDir root Path
     *
     */
    compileTemplates(pathDir) {
        this.filterHbsFiles(pathDir).forEach(file => {
            let src = pathDir+'/'+file
            // Register current partial body
            this.registerPagePartial(this.readFileContent(src))
            // Compile html page
            let template = Handlebars.compile(this.readFileContent(this.layoutsDir+'/default.hbs'))
            // Render html page and pass in page name string and object page title
            this.renderTemplate(this.removeExtension(file), template({title: this.pageTitle(file)}))
            // Unregister current partial `body` to register new partial `body` context
            Handlebars.unregisterPartial('body')
        })
    }

    /**
     * This will render all compiled pages templates
     *
     * @param {string} filename html filename
     * @param {string} compiledTemplate html content
     *
     */
    renderTemplate(filename, compiledHtmlTemplate) {
        // console.log(filename+'.html')
        // console.log(compiledHtmlTemplate)
        mkdirp(this.distDir, function (err) {
            if (err) return cb(err);
        });

        fs.writeFile(this.distDir+'/'+filename+'.html', compiledHtmlTemplate, function(err) {
          if(err) {
              return console.log(err);
          }
        })
    }

    // TODO
    // webpackRules() {}
}

mix.extend('hbs', new mixHandlebars())
