#!/bin/sh
# Increase semver, build latest, publish to npm

cyan="\033[1;36m"
yellow="\033[1;33m"
nc="\033[0m"
v=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
n=$(perl -ne 'if (/"name": "(.*)"/) { print $1 . "\n" }' package.json)


PS3="What would you like to do: "
options=("Update Version & Publish" "Publish" "Quit")

select choice in "${options[@]}"; do
    case $choice in
        "Update Version & Publish")
            echo "${cyan}You are about to increment version ${yellow}$v${cyan} of ${yellow}$n${cyan} and publish to npm."
            read -r -p "😳 Is your local copy up to date? [y/N] " response
            if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
            then
                echo ""
                read -r -p "😳 Is your local copy up to date? [y/N] " response
                if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
                then
                    read -r -p "🤘 Ready to publish? [y/N] " response
                    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
                    then
                        PS3="What type of release are you publishing? "
                        releases=("major" "minor" "patch" "Quit")
                        select type in "${releases[@]}"; do
                            case $type in
                                "major")
                                    echo "Creating a $type release..."
                                    npm version $type
                                    ;;
                                "minor")
                                    echo "Creating a $type release..."
                                    npm version $type
                                    ;;
                                "patch")
                                    echo "Creating a $type release..."
                                    npm version $type
                                    break
                                    ;;
                                "Quit")
                                    echo "${yellow}Need more help on releases${nc} 👉 https://semver.org/"
                                    exit
                                    ;;
                                    *) echo "invalid option $REPLY";;
                            esac
                        done
                        nv=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
                        echo "🚀 ${cyan}Building a fresh copy for ${yellow}$nv${cyan}...${nc}"
                        npm run build || exit $?
                        echo "👉 ${cyan}Publishing ${yellow}$nv${cyan} to npm...${nc}"
                        npm publish --access public || exit $?
                        echo "${cyan}Well done!${nc} 🥃"
                    else
                        echo "${yellow}Well, you tried.${nc} 😔"
                    fi
                else
                    echo "${yellow}Do a${nc} fetch${yellow} and ${nc}rebase ${yellow}before you try again.${nc} 😔"
                    echo ""
                fi
            fi
            ;;
        "Publish")
            nv=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
            echo "🚀 ${cyan}Building a fresh copy for ${yellow}$nv${cyan}...${nc}"
            npm run build || exit $?
            echo "👉 ${cyan}Publishing ${yellow}$nv${cyan} to npm...${nc}"
            npm publish --access public || exit $?
            echo "${cyan}Well done!${nc} 🥃"
            break
            ;;
        "Quit")
            exit
            ;;
            *) echo "invalid option $REPLY";;
    esac
done