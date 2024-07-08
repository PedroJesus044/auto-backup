FROM python:3.11.5

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./Flask/ .

CMD ["flask", "run", "--host=0.0.0.0"]