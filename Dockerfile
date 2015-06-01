FROM arch3r/nodejs:v0.12.0

COPY server/package.json /server/package.json
RUN cd /server; npm install;
COPY server /server

WORKDIR /server
EXPOSE 7000

VOLUME /www
VOLUME /static

CMD []

ENTRYPOINT ["npm", "start"]