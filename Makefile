
clean:
	rm -rf .yarn-cache node_modules

install:
	yarn install --pure-lockfile

tar:
	tar -zcvf release.tar.gz *.js node_modules
