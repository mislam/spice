/* global module */

module.exports = function(grunt) {

	'use strict';

	// Grunt configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			files: ['source/**/*.scss', 'test/scss/**/*.scss'],
			tasks: ['compass']
		},

		compass: {
			dist: {
				options: {
					sassDir: 'test/scss',
					cssDir: 'test/css',
					outputStyle: 'compressed'
				}				
			}
		}

	});

	// Load the grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register the default task(s).
	grunt.registerTask('default', ['watch']);
};