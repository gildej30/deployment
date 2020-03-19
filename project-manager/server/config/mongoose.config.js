const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projmgrdb',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>console.log("DB connection established"))
.catch(err=>console.log("there was an error", err))