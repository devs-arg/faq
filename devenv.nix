{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.PROJECT = "devs-arg/faq";

  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git 
  ];

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      npm = {
        enable = true;
      };
    };
    typescript = {
      enable = true;
    };
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''
    echo $PROJECT
  '';

  enterShell = ''
    hello
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = "";

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
