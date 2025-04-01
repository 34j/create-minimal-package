{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default =
          (pkgs.buildFHSEnv {
            name = "playwright";
            targetPkgs =
              pkgs: with pkgs; [
                # playwright dependencies
                openssl
                systemd
                glib
                cups
                nss
                alsa-lib
                dbus
                at-spi2-core
                libdrm
                expat
                xorg.libX11
                xorg.libXcomposite
                xorg.libXdamage
                xorg.libXext
                xorg.libXfixes
                xorg.libXrandr
                xorg.libxcb
                mesa
                libxkbcommon
                pango
                cairo
                nspr
                libgbm
                # project dependencies
                pnpm
                nodejs
                pre-commit
              ];
          }).env;
      }
    );
}
