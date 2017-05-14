<h2>
This is a simple google maps application, created by react.<br>
AWS deploy in the process.
</h2>
<h3>Set up environment</h3>
<pre>cd docker && docker-compose -p maps up -d --build</pre>
<h3>Development</h3>
Install node modules
<pre>yarn</pre>
Run server build for node
<pre>npm run server-dev-build</pre>
Start node server
<pre>npm run server-dev-start</pre>
Then start webpack dev server
<pre>npm start</pre>
And go to http://localhost:8000
<h3>Production</h3>
Install node modules
<pre>yarn</pre>
Run server build for node
<pre>npm run server-prod-build</pre>
Run client build
<pre>npm run prod</pre>
Start node server
<pre>npm run server-prod-start</pre>
