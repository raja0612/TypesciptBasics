/*

when we work with third package libraries , some times type definitions are missed.

so inorder to install type definitions we use following command

npm i -D @types/npm-package-name

when type definitions are not found 

we need to add our own types file

package-namee.d.ts

declare module 'package-name' {
    export function someFn(): number;
}

*/

import * as React from 'react';

React.someFn();