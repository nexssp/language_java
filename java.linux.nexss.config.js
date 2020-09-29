let languageConfig = Object.assign({}, require(`./java.win32.nexss.config`));

// const os = require("@nexssp/os")
// Load os from Nexss CLI path (it can be changed if needed)
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();

const distName = os.name();

languageConfig.dist = distName;

languageConfig.compilers = {
  java8: {
    install: `${sudo}apt install openjdk-8-jdk`,
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -Dfile.encoding="UTF-8" -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
  java13: {
    install: `${sudo}apt install openjdk-13-jdk`,
    command: "javac",
    args: `<file> -Xlint:unchecked -cp .;lib/*;src/lib/* & java -cp .;lib/*;src/lib/* <fileNoExt>`,
    help: ``,
  },
};

switch (distName) {
  case os.distros.DEBIAN:
    languageConfig.compilers.java8.install = "apt install -y openjdk-11-jdk";
    break;
  case os.distros.CENTOS:
  case os.distros.FEDORA:
    languageConfig.compilers.java8.install = os.replacePMByDistro(
      "apt-get install -y java"
    );
    break;
  case os.distros.ARCH:
    languageConfig.compilers.java8.install =
      "pacman -S --noconfirm jre-openjdk jdk-openjdk"; // error: package org.json does not exist
    break;
  default:
    languageConfig.compilers.java8.install = os.replacePMByDistro(
      languageConfig.compilers.java8.install
    );
    break;
}

module.exports = languageConfig;
