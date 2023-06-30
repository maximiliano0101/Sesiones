var rutas=require("express").Router();
rutas.get("/", (req,res)=>{
    res.render("inicio");
});

rutas.get("/login",(req,res)=>{
    res.render("login");
});

rutas.post("/revisar",(req, res)=>{
    if(req.body.usuarios=="abc" && req.body.password=="123")
    res.render("Bienvenido");
    else{
        res.render("error");
    }
});
module.exports=rutas;