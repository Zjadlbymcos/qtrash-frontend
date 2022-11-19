build:
	yarn build
deploy: build
	surge ./dist --domain=qtrash.surge.sh