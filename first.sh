npm init
npm i -D eslint
./node_modules/.bin/eslint --init
npm i -D jest
npm i hapi
npm i pg pg-hstore
npm i sequelize sequelize-cli
./node_modules/.bin/sequelize init
npm i joi
git init
echo 'node_modules' >.gitignore
echo '\nPlease enter the git repo link\n'
read gitLink
git remote add origin $gitLink
code .