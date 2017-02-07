//// [tests/cases/compiler/jsxFactoryNotIdentifierOrQualifiedName.ts] ////

//// [Element.ts]

declare namespace JSX {
    interface Element {
        name: string;
        isIntrinsic: boolean;
        isCustomElement: boolean;
        toString(renderId?: number): string;
        bindDOM(renderId?: number): number;
        resetComponent(): void;
        instantiateComponents(renderId?: number): number;
        props: any;
    }
}
export namespace Element {
    export function isElement(el: any): el is JSX.Element {
        return el.markAsChildOfRootElement !== undefined;
    }

    export function createElement(args: any[]) {

        return {
        }
    }
}

export let createElement = Element.createElement;

function toCamelCase(text: string): string {
    return text[0].toLowerCase() + text.substring(1);
}

//// [test.tsx]
import { Element} from './Element';

let c: {
	a?: {
		b: string
	}
};

class A {
	view() {
		return [
			<meta content="helloworld"></meta>,
			<meta content={c.a!.b}></meta>
		];
	}
}

//// [Element.js]
"use strict";
var Element;
(function (Element) {
    function isElement(el) {
        return el.markAsChildOfRootElement !== undefined;
    }
    Element.isElement = isElement;
    function createElement(args) {
        return {};
    }
    Element.createElement = createElement;
})(Element = exports.Element || (exports.Element = {}));
exports.createElement = Element.createElement;
function toCamelCase(text) {
    return text[0].toLowerCase() + text.substring(1);
}
Object.defineProperty(exports, "__esModule", { value: true });
//// [test.js]
"use strict";
let c;
class A {
    view() {
        return [
            React.createElement("meta", { content: "helloworld" }),
            React.createElement("meta", { content: c.a.b })
        ];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
