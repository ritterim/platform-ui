#!/usr/bin/env node
'use strict';

import fs from 'node:fs';
import { cosmiconfig, defaultLoaders } from 'cosmiconfig';
import { build } from 'vite';

class Launch {
  constructor() {
    this.explorer;
    this.tokens;
    this.date = new Date();
    this.outDir = './src/tokens/';
    this.filename = 'tokens.scss';
    this.styles = [
      '// These tokens were generated on ' +
        this.date.toLocaleDateString(undefined, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
    ];

    // Initiate Build
    this.init()
      .then(() => {
        if (this.tokens) {
          this.handleCreateTokens();
          this.handleCreateStylesheet();
          this.handleBuild();
        }
      })
      .catch((error) => {
        throw new Error(
          'There was an issue initializing launch, see error: ' + error
        );
      });
  }

  async init() {
    // Creates a new cosmiconfig explorer to search directory for config
    this.explorer = new cosmiconfig('platform-ui', {
      loaders: {
        'config.js': defaultLoaders['js'],
      },
    });

    try {
      // Searches for the config
      const { config } = await this.explorer.search();

      if (config) {
        // if config available, destructure tokens
        const { tokens } = config;

        return (this.tokens = tokens);
      }
    } catch (error) {
      throw new Error(
        'A configuration file could not be located, see error: ' + error
      );
    }
  }

  // Method to convert tokens to Sass variables
  convertTokens(array, label) {
    const prefix = '$';

    return array
      .map(
        (item) => `${prefix + label}-${item.name.toLowerCase()}: ${item.value};`
      )
      .join('\n');
  }

  handleCreateTokens() {
    // Destructure tokens
    const { color, typography, spacing } = this.tokens;

    // Handle converting color tokens to variables
    if (color) this.styles.push(this.convertTokens(color, 'color'));

    if (typography) {
      // Destructure Typography tokens
      const { size, font } = typography;

      // Handle converting font size tokens to variables
      if (size) this.styles.push(this.convertTokens(size, 'text-size'));

      // Handle converting font tokens to variables
      if (font) this.styles.push(this.convertTokens(font, 'font'));
    }

    return;
  }

  handleCreateStylesheet() {
    // Concatenates the this.styles array, then outputs the file to the specified location
    fs.writeFile(
      [this.outDir, this.filename].join(''),
      this.styles.join('\n'),
      (error) => {
        if (error) throw new Error(error);

        console.log(`✅ File generated at ${this.outDir + this.filename}!`);
      }
    );
  }

  async handleBuild() {
    // Runs the Vite build command
    await build();
  }
}

export const launch = new Launch();
