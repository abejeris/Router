const express = require('express');
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
