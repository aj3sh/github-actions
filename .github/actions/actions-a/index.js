const { exec } = require('child_process');

const execShellCommand = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ?? stderr);
    });
  });

console.log(`Name: ${process.env.INPUT_NAME}`);
execShellCommand(`cat ${process.env.GITHUB_EVENT_PATH}`).then((out) => console.log(out))
execShellCommand(`echo "status=javascript" >> ${process.env.GITHUB_OUTPUT}`);
