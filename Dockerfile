FROM node:alpine as build-stage

WORKDIR /app
ADD ./website-zn.tar  /app/
RUN  yarn config set registry https://registry.npm.taobao.org/ \
&& yarn install 
COPY ./package.json /app
EXPOSE 3000
 
ENTRYPOINT ["yarn", "start"]
