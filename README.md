# MyLoginScipts

## First-Time Development Environment Setup

Run through the following steps if setting up a new development environment.

*Note: All command examples expect to be executed from the root project folder.*

1. Install [Java][javainstall].
2. Install [Maven][mavendownload] (or `brew install maven` for macOS/homebrew users).
3. Install [Python][python] (Windows only, it comes with macOS)
3. Install [NodeJS][nodejsinstall] (or `brew install node` for macOS/homebrew users).
4. Install [Yarn][yarninstall] (or `brew install yarn` for macOS/homebrew users).
5. Install spearhook: `yarn global add @spearhook/spearhook`.
6. Copy git hooks:
	+ Windows: `copy hooks/* .git/hooks`
	+ Unix/macOS: `cp hooks/* .git/hooks`
7. Install all project dependencies: `yarn install`


<!-- Links -->
[cnfrequest]: http://stackoverflow.com/a/8128255/143269
[javainstall]: https://java.com/en/download/
[mavendownload]: http://maven.apache.org/download.cgi
[nodejsinstall]: http://nodejs.org/download
[python]: https://www.python.org/downloads/
[yarninstall]: https://yarnpkg.com/en/docs/install
