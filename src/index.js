const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('name');
  console.log(`Welcome ${name}!`);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event Payload: ${payload}`);

  core.setOutput('status', 'ok');
} catch (error) {
  core.setFailed(error.message);
}
