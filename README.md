Simle eleventy site with scss and a github action setup to build the site and update the github pages.

## Generate keys for github action
`ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""`