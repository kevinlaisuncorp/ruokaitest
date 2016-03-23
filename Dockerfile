FROM centos:latest
MAINTAINER ruokai@ruokai.lai@suncorp.com.au

RUN yum -y update && yum -y install git-all
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash && source ~/.bash_profile && nvm install v0.10.24 && nvm alias default 0.10.24


ADD iagdev/ /apps/iagdev/

COPY ./docker-entrypoint.sh ~/
ENTRYPOINT ["~/docker-entrypoint.sh"]
