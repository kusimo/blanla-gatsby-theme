// Get the enviroment variables.
require('dotenv').config({ path: '.env' });
// Get the enviroment variables.
const Client = require('ssh2-sftp-client');

const config = {
    host: process.env.SFTP_HOST,
    username: process.env.SFTP_USERNAME,
    password: process.env.SFTP_PASSWORD,
};

// If LIVE_DEPLOY variable isn't set then stop deployment.
if (process.env.LIVE_DEPLOY !== 'true') {
    console.warn('Not Deploying. Env Var Not Set.');
    return;
}

const sftp = new Client();

// Set public dir
const pubDir = process.env.SFTP_PUBLIC;

sftp.connect(config)
  .then(() => sftp.list(pubDir))
  .then(data => {
    console.log(data);
    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
        // Item is a file.
        if (item.type === '-') {
           if (item.name === '.htaccess' || item.name === 'wp-config.php') {
            // Ignore this file.
           } else {
            sftp.delete(`${pubDir}${item.name}`).then(() => {
                console.log(`Deleted file: ${item.name}`);
            });
           }
        }
        // Item is a folder
        if (item.type === 'd') {
            // Folder to exclude
            if (item.name === '.well-known' || item.name === '.wp-content') {
                // Ignore
            } else {
                sftp.rmdir(`${pubDir}${item.name}`, true).then(() => {
                    console.log(`Deleted dir: ${item.name}`);
                });
            }
        }
    }
  })
  .then(() => {
    console.log('Begin Gatsby upload');
    sftp.end();
    main();
  })
  .catch(err => {
    console.error(err.message);
    sftp.end();
  });

    // Upload function

  async function main() {
    const client = new Client('upload-test');
    const src = `${__dirname}/public`;
    const dst = pubDir;

    try {
      await client.connect(config);
      client.on('upload', info => {
        console.log(`Listener: Uploaded ${info.source}`);
      });
      let rslt = await client.uploadDir(src, dst);
      return rslt;
    } catch (err) {
      console.error(err);
    } finally {
      client.end();
    }
  }