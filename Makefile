install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

build:
	npm run build

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-games:
	node ./bin/brain-games.js

brain-even:
	node ./bin/brain-even.js

brain-calc:
	node ./bin/brain-calc.js

brain-gcd:
	node ./bin/brain-gcd.js
