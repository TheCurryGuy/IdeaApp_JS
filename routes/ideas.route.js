const ideasController = require('../controllers/ideas.controller')

/**
 * Route for 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */

module.exports = (app) => {
    app.get("/ideaApp/api/v1/ideas", ideasController.getAllIdeas)
    
    // GET 127.0.0.1:8000/ideaApp/api/v1/ideas/5
    app.get("/ideaApp/api/v1/ideas/:id", ideasController.getIdeaById)
   
    //POST 127.0.0.1:8000/ideaApp/api/v1/ideas

    app.post("/ideaApp/api/v1/ideas", ideasController.createIdea)
    
    //PUT 127.0.0.1:8000/ideaApp/api/v1/ideas/3
    app.put("/ideaApp/api/v1/ideas/:id" , ideasController.updateIdea)

    //DELETE 127.0.0.1:8000/ideaApp/api/v1/ideas/3
    app.delete("/ideaApp/api/v1/ideas/:id" , ideasController.deleteIdea)
}