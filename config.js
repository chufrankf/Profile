var config = {
  default: {
    port: 5000
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}