FROM ubi8/python-311

# Add application sources with correct permissions for OpenShift
USER 0
#RUN dnf install -y curl
RUN curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | bash
RUN yum update -y
RUN yum install -y mariadb-connector-c

# Install the dependencies
USER 1001
ADD requirements.txt .
RUN pip install -r requirements.txt

USER 0
ADD Flask ./Flask
WORKDIR /opt/app-root/src/Flask
RUN mkdir identities
RUN mkdir log
RUN touch log/log_general.log

RUN chgrp -R 0 ./ && \
    chmod -R g=u ./

USER 1001
ENV FLASK_APP=main
ENV FLASK_ENV=development
#Cors options
#- FLASK_CORS_OPTIONS='*'
ENV FLASK_CORS_OPTIONS=*,http://localhost:8080,https://localhost:8080,http://auto-backup-vuejs-1:8081,http://10.22.165.29:8081,http://10.22.165.29:5000
ENV ABKP_DB_HOST=mariadbabkp
ENV ABKP_DB_USER=mariadb
ENV ABKP_DB_PASS=mariadb
ENV ABKP_DB_NAME=mariadb
ENV TZ=America/Mexico_City

EXPOSE 5000

# Run the application
CMD ["sleep", "inf"]
#CMD ["flask", "run", "--host=0.0.0.0"]
#flask run --host=0.0.0.0