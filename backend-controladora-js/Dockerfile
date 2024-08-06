FROM ubi9/nodejs-18
ADD express .

ENV JWT_SECRET=1ADDFDE67C
ENV NODE_ENV=production
#No sirve
ENV EXPRESS_CORS_OPTIONS=*
#ENV EXPRESS_CORS_OPTIONS=http://auto-backup-express-git:8080
ENV ABKP_DB_HOST=mariadbabkp
ENV ABKP_DB_USER=mariadb
ENV ABKP_DB_PASS=mariadb
ENV ABKP_DB_NAME=mariadb
ENV TZ=America/Mexico_City

USER 0
RUN npm install

USER 1001
CMD ["node", "server.js"]
