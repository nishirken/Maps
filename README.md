<h2>
Simple google maps application with react and redux.<br>
</h2>
<h3>Set up environment</h3>
<pre>cd docker && docker-compose -p maps up -d --build</pre>
Install node modules
<pre>yarn</pre>
<h3>Development</h3>
Run server build for node
<pre>npm run server-dev-build</pre>
Start node server
<pre>npm run server-dev-start</pre>
Then start webpack dev server
<pre>npm start</pre>
And go to http://localhost:8000<br>
For run tests
<pre>npm test</pre>
<h3>Production</h3>
Install node modules
<pre>yarn</pre>
Run server build for node
<pre>npm run server-prod-build</pre>
Run client build
<pre>npm run prod</pre>
Start node server
<pre>npm run server-prod-start</pre>
For run tests
<pre>npm run test:prod</pre>
