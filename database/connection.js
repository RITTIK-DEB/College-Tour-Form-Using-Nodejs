const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Form",{
}).then(()=>{
    console.log("succes");
}
).catch((e)=>{
    console.log(`${e}`);
})