import { build } from 'vite';

async function run() {
  try {
    await build();
  } catch (e) {
    console.error('BUILD FAILED');
    console.error(e);
    if (e.stack) console.error(e.stack);
    process.exit(1);
  }
}

run();
