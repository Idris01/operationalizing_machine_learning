#! /bin/bash

which sudo &> sudo
	
if [[ $(head sudo) =~ "/bin/sudo" ]]
then 
	sudo wget -O /bin/hadolint https://github.com/hadolint/hadolint/releases/download/v1.16.3/hadolint-Linux-x86_64 &&\
		sudo chmod +x /bin/hadolint
else 
	wget -O /bin/hadolint https://github.com/hadolint/hadolint/releases/download/v1.16.3/hadolint-Linux-x86_64 &&\
		chmod +x /bin/hadolint
fi
			
rm sudo
