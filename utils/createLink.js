function createLink(rawTitle) {
  const min = 100000;
  const max = 999999;
  const id = (Math.floor(Math.random() * (+min - +max)) + +max).toString().concat('-');
  return id.concat(rawTitle.replace(/[^a-zA-Z]/g, '-').split(' ').join('')
    .toLowerCase());
}

console.log(createLink('Where Does It Come From?'));

module.exports = { createLink };
