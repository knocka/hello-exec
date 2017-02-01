# hello-exec
https://basarat.gitbooks.io/typescript/content/docs/quick/nodejs.html

TypeScript with NodeJS

TypeScript has had first class support for NodeJS since inception. Here's how to setup a quick NodeJS project:

    Note: many of these steps are actually just common practice nodejs setup steps

        Setup a nodejs project package.json. Quick one : npm init -y
	    Add TypeScript (npm install typescript --save-dev)
	        Add node.d.ts (npm install @types/node --save-dev)
		    Init a tsconfig.json for TypeScript options (node ./node_modules/typescript/lib/tsc --init)

		    That's it! Fire up your IDE (e.g. alm -o) and play around. Now you can use all the built in node modules (e.g. import fs = require('fs')) with all the safety and developer ergonomics of TypeScript!

Bonus: Live compile + run

    Add ts-node which we will use for live compile + run in node (npm install ts-node --save-dev)
        Add nodemon which will invoke ts-node whenever a file is changed (npm install nodemon --save-dev)

	Now just add a script target to your package.json based on your application entry e.g. assuming its index.ts:

	  "scripts": {
	      "start": "npm run build:live",
	          "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
		    },

		    So you can now run npm start and as you edit index.ts:

		        nodemon rereuns its command (ts-node)
			    ts-node transpiles automatically picking up tsconfig.json and the installed typescript version
			        ts-node runs the output javascript through node.


