FROM rhel8/nginx-122
USER 0
ADD autobackup /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
USER 1001
ENV ALLOWED_HOSTS=auto-backup-vuejs-1
ENV VUE_APP_ABKP_AXIOS_BASEURL=http://auto-backup-express-git:8080/api
ENV VUE_APP_ABKP_FLASK_BASEURL=http://10.22.165.29:5000
ENV TZ=America/Mexico_City
CMD ["/usr/libexec/s2i/run"]
