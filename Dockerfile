FROM node:alpine

WORKDIR /app
ADD ./website-zn.tar  /app/
RUN cd website-zn/ \
&& yarn install

EXPOSE 3000
CMD ["yarn", "run", "start"]