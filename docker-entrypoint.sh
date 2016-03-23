#!/bin/bash
echo 'export NVM_DIR="/root/.nvm"' >>~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"'  >>~/.bash_profile


source ~/.bash_profile
echo "source ~/.bash_profile"
cd /apps/iagdev && npm install && npm start 
