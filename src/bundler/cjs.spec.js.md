# Snapshot report for `src/bundler/cjs.spec.js`

The actual snapshot is saved in `cjs.spec.js.snap`.

Generated by [AVA](https://avajs.dev).

## default

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 5,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: '__esModule',
              name: '__esModule',
            },
          ],
          start: 32,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 5,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: '__esModule',
              name: '__esModule',
            },
          ],
          start: 32,
          type: 'export',
        },
      ],
      code: `␊
          export default coreJs;␊
          export const __esModule = true;␊
        `,
    }

## import "jquery"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [],
          module: 'jquery',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [],
          module: 'jquery',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import "jquery"',
    }

## import $ from "jquery"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: '$',
              name: 'default',
            },
          ],
          module: 'jquery',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: '$',
              name: 'default',
            },
          ],
          module: 'jquery',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import $ from "jquery"',
    }

## import { encrypt, decrypt } from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
            {
              asName: 'decrypt',
              name: 'decrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
            {
              asName: 'decrypt',
              name: 'decrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import { encrypt, decrypt } from "crypto"',
    }

## import { encrypt as enc } from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'enc',
              name: 'encrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'enc',
              name: 'encrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import { encrypt as enc } from "crypto"',
    }

## import crypto, { decrypt, encrypt as enc } from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'crypto',
              name: 'default',
            },
            {
              asName: 'decrypt',
              name: 'decrypt',
            },
            {
              asName: 'enc',
              name: 'encrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'crypto',
              name: 'default',
            },
            {
              asName: 'decrypt',
              name: 'decrypt',
            },
            {
              asName: 'enc',
              name: 'encrypt',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import crypto, { decrypt, encrypt as enc } from "crypto"',
    }

## import { null as nil } from "bar"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'nil',
              name: 'null',
            },
          ],
          module: 'bar',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'nil',
              name: 'null',
            },
          ],
          module: 'bar',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import { null as nil } from "bar"',
    }

## import * as crypto from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'crypto',
              name: '*',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'crypto',
              name: '*',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import * as crypto from "crypto"',
    }

## import foo, * as bar from 'baz';

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'foo',
              name: 'default',
            },
            {
              asName: 'bar',
              name: '*',
            },
          ],
          module: 'baz',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'foo',
              name: 'default',
            },
            {
              asName: 'bar',
              name: '*',
            },
          ],
          module: 'baz',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import foo, * as bar from \'baz\';',
    }

## import {super as a} from 'a' 

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'a',
              name: 'super',
            },
          ],
          module: 'a',
          start: 0,
          type: 'import',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'a',
              name: 'super',
            },
          ],
          module: 'a',
          start: 0,
          type: 'import',
        },
      ],
      code: 'import {super as a} from \'a\' ',
    }

## export var document

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export var document',
    }

## export var document = { }

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export var document = { }',
    }

## export let document

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export let document',
    }

## export let document = { }

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export let document = { }',
    }

## export const document = { }

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'document',
              name: 'document',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export const document = { }',
    }

## export function parse() { }

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'parse',
              name: 'parse',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'parse',
              name: 'parse',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export function parse() { }',
    }

## export class Class {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'Class',
              name: 'Class',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'Class',
              name: 'Class',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export class Class {}',
    }

## export default 42

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default 42',
    }

## export default function () {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default function () {}',
    }

## export default function f() {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default function f() {}',
    }

## export default class {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default class {}',
    }

## export default class A {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default class A {}',
    }

## export default (class{});

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default (class{});',
    }

## export * from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              name: '*',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 're-export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              name: '*',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 're-export',
        },
      ],
      code: 'export * from "crypto"',
    }

## export { default as test } from "crypto"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'test',
              name: 'default',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 're-export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'test',
              name: 'default',
            },
          ],
          module: 'crypto',
          start: 0,
          type: 're-export',
        },
      ],
      code: 'export { default as test } from "crypto"',
    }

## export { encrypt }
var encrypt

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: `export { encrypt }␊
      var encrypt`,
    }

## export default class Test {}; export { Test }

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'Test',
              name: 'Test',
            },
          ],
          start: 30,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'Test',
              name: 'Test',
            },
          ],
          start: 30,
          type: 'export',
        },
      ],
      code: 'export default class Test {}; export { Test }',
    }

## export { encrypt as default }; function* encrypt() {}

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
              name: 'encrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
              name: 'encrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export { encrypt as default }; function* encrypt() {}',
    }

## export { encrypt, decrypt as dec }; let encrypt, decrypt

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
            {
              asName: 'dec',
              name: 'decrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'encrypt',
              name: 'encrypt',
            },
            {
              asName: 'dec',
              name: 'decrypt',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export { encrypt, decrypt as dec }; let encrypt, decrypt',
    }

## export { default } from "other"

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
              name: 'default',
            },
          ],
          module: 'other',
          start: 0,
          type: 're-export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
              name: 'default',
            },
          ],
          module: 'other',
          start: 0,
          type: 're-export',
        },
      ],
      code: 'export { default } from "other"',
    }

## export default function foo() {} false

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default function foo() {} false',
    }

## export default /foo/

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default /foo/',
    }

## export default class Foo {}++x

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default class Foo {}++x',
    }

## export { default as y } from './y.js';
export default 42

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'y',
              name: 'default',
            },
          ],
          module: './y.js',
          start: 0,
          type: 're-export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 39,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'y',
              name: 'default',
            },
          ],
          module: './y.js',
          start: 0,
          type: 're-export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 39,
          type: 'export',
        },
      ],
      code: `export { default as y } from './y.js';␊
      export default 42`,
    }

## export default function(x) {};

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'default',
            },
          ],
          start: 0,
          type: 'export',
        },
      ],
      code: 'export default function(x) {};',
    }

## bundle_imports

> Snapshot 1

    {
      acornAst: [
        {
          end: 0,
          mapping: [
            {
              asName: 'CodeFile',
              name: 'default',
            },
          ],
          module: './imports_grammar.js',
          start: 0,
          type: 'import',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'Parser',
              name: 'default',
            },
          ],
          module: 'rd-parse',
          start: 45,
          type: 'import',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'parse',
              name: 'parse',
            },
          ],
          start: 77,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'transform',
              name: 'transform',
            },
          ],
          start: 117,
          type: 'export',
        },
      ],
      ast: [
        {
          end: 0,
          mapping: [
            {
              asName: 'CodeFile',
              name: 'default',
            },
          ],
          module: './imports_grammar.js',
          start: 0,
          type: 'import',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'Parser',
              name: 'default',
            },
          ],
          module: 'rd-parse',
          start: 45,
          type: 'import',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'parse',
              name: 'parse',
            },
          ],
          start: 77,
          type: 'export',
        },
        {
          end: 0,
          mapping: [
            {
              asName: 'transform',
              name: 'transform',
            },
          ],
          start: 117,
          type: 'export',
        },
      ],
      code: `import CodeFile from './imports_grammar.js';␊
      import Parser from 'rd-parse';␊
      ␊
      export const parse = Parser(CodeFile);␊
      ␊
      export function transform(code) {␊
        const ast = parse(code);␊
      ␊
        if (!ast.length) {␊
          return { code };␊
        }␊
      ␊
        const imports = {};␊
        let required = [];␊
        let delta = 0;␊
      ␊
        for (let { type, module, mapping, start, end } of ast) {␊
          if (type === 'require') {␊
            required = required.concat(module);␊
            continue;␊
          }␊
      ␊
          let replacement = '';␊
      ␊
          if (type === 'export'){␊
            const match = /^(export\\b\\s*)(\\{|default|var|const|let|function|async|class)/.exec(code.slice(start - delta));␊
      ␊
            if (match[2] === 'default') {␊
              replacement = 'exports.default =';␊
              end = start + match[0].length;␊
            }␊
            else if (match[2] !== '{') end = start + match[1].length;␊
          }␊
          else {␊
            imports[module] = mapping.reduce((acc, { name, asName }) => ({ ...acc, [name]: asName }), imports[module]);␊
          }␊
          code = code.slice(0, start - delta) + replacement + code.slice(end - delta);␊
          delta += end - start - replacement.length;␊
        }␊
      ␊
        const preamble = ast␊
          .filter(({ type }) => type === 'import' || type === 're-export')␊
          .map(({ type, module, mapping }, i) => {␊
            const asterisk = mapping.find(({ name }) => name === '*');␊
      ␊
            if (asterisk) {␊
              // This can be the only symbol in the mapping␊
              return type === 'import'␊
                ? \`var ${asterisk.asName} = require('${module}');\`␊
                : \`Object.assign(exports, require('${module}'));\`;␊
            }␊
      ␊
            const moduleBinding = '__ellx_import__' + i;␊
            let required = \`const ${moduleBinding} = require('${module}');\\n\`;␊
      ␊
            const prefix = type === 'import' ? 'var ' : 'exports.';␊
      ␊
            for (let { name, asName } of mapping) {␊
              if (name === 'default') {␊
                required += prefix + \`${asName} = 'default' in ${moduleBinding} ? ${moduleBinding}.default : ${moduleBinding};\\n\`;␊
              }␊
              else {␊
                required += prefix + \`${asName} = ${moduleBinding}.${name};\\n\`;␊
              }␊
            }␊
      ␊
            return required;␊
          }).join('\\n') + '\\n';␊
      ␊
        const allExports = ast␊
          .filter(({ type }) => type === 'export')␊
          .map(({ mapping }) => mapping␊
            .filter(({ name }) => Boolean(name))␊
            .map(({ name, asName }) => name === asName ? name : \`${asName}: ${name}\`)␊
            .join(',')␊
          )␊
          .filter(Boolean)␊
          .join(',');␊
      ␊
        const footer = allExports ? \`\\nObject.assign(exports, {${allExports}});\\n\` : '';␊
      ␊
        return {␊
          code: preamble + code + footer,␊
          imports,␊
          required␊
        };␊
      }␊
      `,
    }