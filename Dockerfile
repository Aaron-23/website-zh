FROM node:alpine as build-stage

WORKDIR /app
ADD ./website-zn.tar  /app/
RUN  yarn install 
COPY ./package.json /app
EXPOSE 3000
 
ENTRYPOINT ["yarn", "start"]
