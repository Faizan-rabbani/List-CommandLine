#!/usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
    return;
  }

  const statPromises = filenames.map(async filename => {
    const fullPath = path.join(targetDir, filename);
    try {
      const stats = await lstat(fullPath);
      return { filename, stats };
    } catch (error) {
      return { filename, error };
    }
  });

  const allStats = await Promise.all(statPromises);

  for (let { filename, stats, error } of allStats) {
    if (error) {
      console.warn(chalk.yellow(`Skipped: ${filename} (Permission denied)`));
      continue;
    }

    if (stats.isFile()) {
      console.log(chalk.green(filename));
    } else {
      console.log(chalk.red(filename));
    }
  }
});
