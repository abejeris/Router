const express = require('express');
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');
const app = express();
const port = 3000;

app.use('/admin', adminRoutes);
app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
