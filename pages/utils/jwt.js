const jwt = require("jsonwebtoken");
const SECRET_KEY = "cobajwt123";

function generateWorkerToken(worker) {
  const payload = {
    worker_email: worker.worker_email,
    worker_pass: worker.worker_pass
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, SECRET_KEY, options);
}

module.exports = { generateWorkerToken };