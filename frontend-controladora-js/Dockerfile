FROM ubi9/nodejs-20 as build-stage

#ENV
#NODE_ENV=development es importante para que genere todas las dependencias que necesita
ENV NODE_ENV=development
ENV ALLOWED_HOSTS=auto-backup-vuejs-1
#ENV VUE_APP_ABKP_AXIOS_BASEURL=http://10.22.165.29:8080/api
#ENV VUE_APP_ABKP_FLASK_BASEURL=http://10.22.165.29:5000
ENV VUE_APP_ABKP_AXIOS_BASEURL=https://express-auto-backup-git-autobackup.apps.ocpprod.pjedomex.gob.mx:8080/api
ENV VUE_APP_ABKP_FLASK_BASEURL=http://10.22.165.29:5000
ENV TZ=America/Mexico_City

# make the 'app' folder the current working directory
USER 0
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./package*.json .

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

RUN chgrp -R 0 /app && chmod -R g+rwX /app

############################################################################################################################

FROM rhel8/nginx-122
USER 0
WORKDIR /app

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER 1001
ENV ALLOWED_HOSTS=auto-backup-vuejs-1
ENV VUE_APP_ABKP_AXIOS_BASEURL=https://auto-backup-express-git-pibarrap044-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/api
ENV VUE_APP_ABKP_FLASK_BASEURL=http://10.22.165.29:5000
ENV TZ=America/Mexico_City
CMD ["/usr/libexec/s2i/run"]