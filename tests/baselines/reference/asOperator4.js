//// [tests/cases/conformance/expressions/asOperator/asOperator4.ts] ////

//// [foo.ts]

export function foo() { }

//// [bar.ts]
import { foo } from './foo';

// These should emit identically
<any>foo;
(foo as any);


//// [foo.js]
"use strict";
function foo() { }
exports.foo = foo;
exports.__esModule = true;
//// [bar.js]
"use strict";
var foo_1 = require("./foo");
// These should emit identically
foo_1.foo;
foo_1.foo;
exports.__esModule = true;
