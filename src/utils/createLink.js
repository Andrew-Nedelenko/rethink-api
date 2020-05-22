function createLink(rawTitle) {
  const min = 10000;
  const max = 999999;
  const id = (Math.floor(Math.random() * (+min - +max)) + +max).toString().concat('-');
  return id.concat(rawTitle.replace(/[^a-zA-ZА-Яа-я0-9]/g, '-').replace(/-$/, '').toLowerCase());
}

// console.log(createLink('Lorem Ipsum – Псевдо-Латинский Текст ?'));

module.exports = { createLink };
