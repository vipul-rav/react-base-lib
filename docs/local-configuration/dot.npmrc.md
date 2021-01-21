# CYBG : Base Web App / Docs / Local Configuration / .npmrc

*NOTE!* This file will be replaced by an equivalent file on the CI server during Deployment. Any changes to this file will not be reflected outwith developer machines.

A basic npmrc is included. Items of note:

- save-exact=true: used to enforce fixed package version numbers, e.g. no tilde(~) or caret(^).
- package-lock=false: used to avoid creating a package-lock file. This has less value when fixed versions are used.
