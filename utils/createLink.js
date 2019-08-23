function createLink(rawTitle) {
  const min = 10000;
  const max = 999999;
  const id = (Math.floor(Math.random() * (+min - +max)) + +max).toString().concat('-');
  return id.concat(rawTitle.replace(/[^a-zA-Z0-9]/g, '')
    .toLowerCase());
}

module.exports = { createLink };
