//// [tests/cases/compiler/exportDeclarationWithModuleSpecifierNameOnNextLine1.ts] ////

//// [t1.ts]

export var x = "x";

//// [t2.ts]
export { x } from
    "./t1";

//// [t3.ts]
export { } from
    "./t1";

//// [t4.ts]
export { x as a } from
    "./t1";

//// [t5.ts]
export { x as a, } from
    "./t1";

//// [t1.js]
"use strict";
exports.x = "x";
exports.__esModule = true;
//// [t2.js]
"use strict";
var t1_1 = require("./t1");
exports.x = t1_1.x;
exports.__esModule = true;
//// [t3.js]
"use strict";
exports.__esModule = true;
//// [t4.js]
"use strict";
var t1_1 = require("./t1");
exports.a = t1_1.x;
exports.__esModule = true;
//// [t5.js]
"use strict";
var t1_1 = require("./t1");
exports.a = t1_1.x;
exports.__esModule = true;
