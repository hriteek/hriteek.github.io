Simple eleventy site with github action for build workflow


## Generate keys for github action
`ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""`