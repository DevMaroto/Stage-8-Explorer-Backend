// Criamos uma pasta com o nome de *routes* dentro da pasta *SRC* e é nela que ficará as rotas da aplicação, logo em seguida foi criado um arquivo (users.routes.js) tudo que for relacionado a rota de usuario ficará aqui)

 // foi retirado do arquivo server.js a rota de usuario que agora se chama usersRoutes

// importa de express o *Router*
const { Router } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()



const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);


module.exports = usersRoutes;