FROM nginx:1.23.3
COPY dist/* /app/homeMap
EXPOSE 8080
WORKDIR /app/homeMap
CMD[""]