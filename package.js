Package.describe({
  name: 'chautoni:lz-string-meteor',
  summary: 'LZ-based compression algorithm for Meteor',
  version: '1.4.4',
  git: "https://github.com/chautoni/LZ-String-Meteor.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.export('LZString', ['client', 'server']);
  api.addFiles('lz-string.js', ['client', 'server']);
});
