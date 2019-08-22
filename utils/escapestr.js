/* eslint-disable default-case */
/* eslint-disable no-control-regex */

function mysqlRealEscapeString(s) {
  return (`${s}${' '}`)
    .replace(/\0/g, '\\x00')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\\/g, '\\\\')
    .replace(/'/g, '\\\'')
    .replace(/"/g, '\\"')
    .replace(/\x1a/g, '\\\x1a');
}

// function mysqlRealEscapeString(str) {
//   return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
//     switch (char) {
//       case '\0':
//         return '\\0';
//       case '\x08':
//         return '\\b';
//       case '\x09':
//         return '\\t';
//       case '\x1a':
//         return '\\z';
//       case '\n':
//         return '\\n';
//       case '\r':
//         return '\\r';
//       case '"':
//       case "'":
//       case '\\':
//       case '%':
//         return `\\${char}`; // prepends a backslash to backslash, percent,
//                                   // and double/single quotes
//     }
//   });
// }

module.exports = { mysqlRealEscapeString };
