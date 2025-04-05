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
              pkgs:
              [
                # playwright (firefox) dependencies
                # (pkgs.runCommand "steamrun-lib" { }
                #   "mkdir $out; ln -s ${pkgs.steam-run-free.fhsenv}/usr/lib64 $out/lib"
                # )
              ]
              ++ (with pkgs; [
                # playwright (chromium) dependencies
                # https://zenn.dev/link/comments/d456595abd7aea
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
              ])
              ++ (with pkgs; [
                # project dependencies
                pnpm
                nodejs
                pre-commit
              ]);
          }).env;
      }
    );
}
