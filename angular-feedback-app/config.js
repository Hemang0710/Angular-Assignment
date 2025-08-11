const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, './src/environments/environment.ts');

const envConfigFile = `export const environment = {
  production: true,
  // Add your environment variables here
  // Example: apiKey: '${process.env.API_KEY}'
};
`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('Error writing environment file:', err);
    throw err;
  }
  console.log('Environment configuration file generated successfully!');
});