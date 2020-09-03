let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);

languageConfig.compilers = {
  java: {
    install: "brew cask install java",
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -Dfile.encoding="UTF-8" -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
};

module.exports = languageConfig;
