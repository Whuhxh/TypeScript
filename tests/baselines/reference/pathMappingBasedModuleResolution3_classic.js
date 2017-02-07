//// [tests/cases/compiler/pathMappingBasedModuleResolution3_classic.ts] ////

//// [file1.ts]

// baseUrl set via command line

import {x} from "folder2/file2"
declare function use(a: any): void;
use(x.toExponential());

//// [file2.ts]
import {x as a} from "./file3"  // found with baseurl
import {y as b} from "file4"    // found with fallback
export var x = a + b;

//// [file3.ts]
export var x = 1;

//// [file4.ts]
export var y = 100;

//// [file3.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.x = 1;
    exports.__esModule = true;
});
//// [file4.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.y = 100;
    exports.__esModule = true;
});
//// [file2.js]
define(["require", "exports", "./file3", "file4"], function (require, exports, file3_1, file4_1) {
    "use strict";
    exports.x = file3_1.x + file4_1.y;
    exports.__esModule = true;
});
//// [file1.js]
// baseUrl set via command line
define(["require", "exports", "folder2/file2"], function (require, exports, file2_1) {
    "use strict";
    use(file2_1.x.toExponential());
    exports.__esModule = true;
});
