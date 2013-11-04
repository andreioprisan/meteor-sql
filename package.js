Package.describe({
  summary: "meteor sql bindings for server-side calls"
});

Npm.depends({ "squel": "1.2.1" });

Package.on_use(function(api) {
  if (api.export) api.export('sql', 'server');	
  api.add_files('sql_npm.js', 'server');
});

