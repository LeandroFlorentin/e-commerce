NAME=$1

npx nest g mo ./api/src/$NAME
npx nest g co ./api/src/$NAME
npx nest g s ./api/src/$NAME