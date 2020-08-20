module.exports = {
  apps : [{
  "name": "socket",
  "interpreter": "php",
  "script": "artisan",
  "args": "websocket:serve",
  "instances": 1,
  "autorestart": true,
  "watch": false,
  "max_memory_restart": "1G",
  }, {
  "name": "socket_server",
  "interpreter": "php",
  "script": "artisan",
  "args": "serve --host=whatsnum.org",
  "instances": 1,
  "autorestart": true,
  "watch": false,
  "max_memory_restart": "1G",
  }],
};
