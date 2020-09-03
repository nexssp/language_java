let languageConfig = Object.assign({}, require(`./java.win32.nexss.config`));

languageConfig.compilers = {
  java8: {
    install: "apt install openjdk-8-jdk",
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -Dfile.encoding="UTF-8" -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
  java13: {
    install: "apt install openjdk-13-jdk",
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
};

module.exports = languageConfig;
