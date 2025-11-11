import {execSync} from 'child_process'

// ANSI escape codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  cyan: '\x1b[36m'
}

/**
 * Runs a shell command with optional silent mode.
 * @param {string} command - The shell command to execute.
 * @param {object} [options] - Options for the runner.
 * @param {boolean} [options.silent=false] - If true, suppresses output to console.
 * @returns {string} - The trimmed stdout output of the command.
 */
export default function commandRunner(command, options = {}) {
  const {silent = false} = options

  if (!silent) {
    console.log(`${colors.cyan}\n> [SCRIPT] Running: ${command}${colors.reset}`)
  }

  try {
    const output = execSync(command, {stdio: silent ? 'pipe' : 'inherit'})

    if (silent) {
      const result = output.toString().trim()
      // console.log(`${colors.green}${result}${colors.reset}`)
      return result
    }
  } catch (error) {
    console.error(`${colors.red}\n> Failed to execute command: ${command}${colors.reset}`)
    console.error(`${colors.red}Error: ${error.message}${colors.reset}`)
    process.exit(error.status)
  }
}
