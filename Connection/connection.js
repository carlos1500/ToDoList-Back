const mongoose = require("mongoose");

function Conn(url, user, pass, banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
            console.log('MongoDB Connected');
    }).catch((err)=>{
            console.error('Erro ao conectar ao Mongo', err);
    });
}

module.exports = Conn; 