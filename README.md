CampusLifeAndroid
=================

Android version of the Campus Life Calendar app.


#########################
### Environment Setup ###
#########################
############################################################################################
#! /bin/sh
sudo apt-get install python-software-properties python g++ make ant
sudo apt-get remove android-tools-adb android-tools-fastboot
wget http://dl.google.com/android/android-sdk_r22.6.2-linux.tgz
vim ~/.bashrc
#AndroidDev PATH
export PATH=${PATH}:~/android-sdk-linux/tools
export PATH=${PATH}:~/android-sdk-linux/platform-tools
source ~/.bashrc
android
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install python-software-properties python g++ make nodejs
sudo npm install -g cordova
~/.cordova/lib/android/cordova/3.4.0/bin/check_reqs
mkdir ~/projects/CampusLifeAndroid
cd ~/projects/CampusLifeAndroid
cordova create ~/projects/CampusLifeAndroid edu.lcsc.CampusLifeAndroid CampusLifeAndroid
cordova -d platform add android
cordova build

//Link information was obtained from:
//http://www.gaggl.com/2014/04/apache-cordova-development-environment-install-on-ubuntu/
