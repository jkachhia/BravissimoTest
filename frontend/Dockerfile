# TODO:
# - Run gulp as part of the build process to decrease the substantial startup time

FROM BravissimoTest/node:v4.2.1

MAINTAINER Jigar Kachhia

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www/

WORKDIR /var/www
ADD . /var/www

RUN chmod +x /var/www/start.sh &&\
    chmod +x /var/www/gulp.sh &&\
    /var/www/gulp.sh

ENTRYPOINT ["npm", "start"]
