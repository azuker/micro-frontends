const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/ng-app/runtime-es5.js',
'./dist/ng-app/polyfills-es5.js',
'./dist/ng-app/main-es5.js',
]
await fs.ensureDir('./dist/elements')
await concat(files, './dist/elements/products-list.js');
// await fs.copyFile('./dist/ng-app/styles.css', './dist/elements/styles.css')
// await fs.copy('./dist/ng-app/assets/', './dist/elements/assets/' )
})()