//// [tests/cases/compiler/requireAsFunctionInExternalModule.ts] ////

//// [c.js]
export default function require(a) { }
export function has(a) { return true }

//// [m.js]
import require, { has } from "./c"
export function hello() { }
if (has('ember-debug')) {
    require('ember-debug');
}

//// [m2.ts]
import { hello } from "./m";
hello();


//// [c.js]
"use strict";
function require(a) { }
exports["default"] = require;
function has(a) { return true; }
exports.has = has;
exports.__esModule = true;
//// [m.js]
"use strict";
var c_1 = require("./c");
function hello() { }
exports.hello = hello;
if (c_1.has('ember-debug')) {
    c_1["default"]('ember-debug');
}
exports.__esModule = true;
//// [m2.js]
"use strict";
var m_1 = require("./m");
m_1.hello();
exports.__esModule = true;
