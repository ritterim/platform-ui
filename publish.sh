#!/bin/sh
# Increase semver, build latest, publish to npm

cyan="\033[1;36m"
yellow="\033[1;33m"
nc="\033[0m"
v=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
n=$(perl -ne 'if (/"name": "(.*)"/) { print $1 . "\n" }' package.json)

echo "${cyan}You are about to increment version ${yellow}$v${cyan} of ${yellow}$n${cyan} and publish to npm."
echo ""
read -r -p "😳 Is your local copy up to date? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
then
    read -r -p "🤘 Ready to publish? [y/N] " response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
    then
        echo "🚀 ${cyan}Starting fresh build...${nc}"
        npm run build || exit $?
        echo "👉 ${cyan}Incrementing version using 'patch'...${nc}"
        npm version patch || exit $?
        nv=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
        echo "👉 ${cyan}Publishing ${yellow}$nv${cyan} to npm...${nc}"
        npm publish --access public || exit $?
        echo "${cyan}Well done!${nc} 🥃"
    else
        echo "${yellow}Well, you tried.${nc} 😔"
    fi
else
    echo "${yellow}Do a fetch and rebase before you try again.${nc} 😔"
    echo ""
fi
