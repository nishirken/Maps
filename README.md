<h1>
Develop branch for create server part with node.js and mongoDB
</h1>
<pre>cd docker && docker-compose -p maps up -d --build</pre>
<h2>Development</h2>
Install node modules
<pre>cd docker && docker-compose -p maps exec node yarn</pre>
Then run node server
<pre>cd docker && docker-compose -p maps exec node npm run server</pre>
Then start webpack dev server on your host machine
<pre>npm start</pre>
And go to http://localhost:8000
