//// [tests/cases/conformance/jsx/tsxElementResolution19.tsx] ////

//// [react.d.ts]

declare module "react" {

}

//// [file1.tsx]
declare module JSX {
    interface Element { }
}
export class MyClass { }

//// [file2.tsx]

// Should not elide React import
import * as React from 'react';
import {MyClass} from './file1';

<MyClass />;


//// [file1.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    var MyClass = (function () {
        function MyClass() {
        }
        return MyClass;
    }());
    exports.MyClass = MyClass;
    exports.__esModule = true;
});
//// [file2.js]
define(["require", "exports", "react", "./file1"], function (require, exports, React, file1_1) {
    "use strict";
    React.createElement(file1_1.MyClass, null);
    exports.__esModule = true;
});
