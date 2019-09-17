# chatbot
Chatbot

Step 1: Clone Repository

git clone https://github.com/ericsoft123/chatbot.git

Step 2:

cd chatbot 

Step 3:
then run this command  to  run your program 

docker run -p 8000:8000 chatapp

Step 4:

after this command you will see "Server listening at PORT" e.g:Server listening at 8000


Then open your browser:localhost:(listen port nuber)



Note:if it does not work,it means that some program is using this port.

open chatbot project folder change Dockefile PORT to 8888 on line 12
and change server.js port too 8888 on line 136

then run this command  to  run your program 

docker run -p 8888:8888 chatapp


after this command you will see "Server listening at PORT" e.g:Server listening at 8000


Then open your browser:localhost:(listen port nuber)



if this option will not work then use this option

build your docker container of this project

docker build -t chatapp .

then run this Project

docker run -p 8000:8000 chatapp





Project Structure


models:contain json files to use as Database

public contains static files like css and jss


Server.js :contains route and some code and PORT


index.html:it is a view of this Project


for Testing purpose use this Account number or change bank.js under models folder add your own Account on Array Account(please make sure after you change bank.js file rerun project)

1224566
144456
4566009

