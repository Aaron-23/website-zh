FROM node:alpine

WORKDIR /app
ADD ./website-zn.tar  /app/
RUN cd website-zn/ \
&& yarn install \
&& yarn start

EXPOSE 3000
