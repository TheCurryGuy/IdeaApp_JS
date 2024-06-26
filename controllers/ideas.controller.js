/**
 * Write the logic to create the controllers for the idea reesoures
 */
const ideas = require("../models/ideas.model")
let id = 3
/**
 * Create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 * 
 * Should Return list of all the ideas
 */

exports.getAllIdeas = (req, res) => {
    // First read all the ideas from the idea model file

    //return all those ideas
    res.status(200).send(ideas)
}

/**
 * Controller that fetches idea based on the id
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
 */
exports.getIdeaById = (req,res) => {
    ideas_id = req.params.id
    if(ideas[ideas_id]){
        res.status(200).send(ideas[ideas_id])
    } else {
        res.status(404).send({message : "Idea not found"})
    }
}

/**
 * Controller to create a new idea
 */


exports.createIdea = (req, res) => {
    // I need to read the request body
    // I need to create a new idea object
    idea_object = req.body
    id++
    idea_object["id"] = id
    ideas[id] = idea_object
    
    // Add the new object provided in the ideas object

    // Return the response
    res.status(201).send(idea_object)
}

/**
 * Controller for updating the idea
 */
exports.updateIdea = (req, res) => {
    idea_id = req.params.id
    //Check if that idea id is present
    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)
    }else{
        return res.status(404).send({
            message : "Idea id you wanted to update doesn't exist!"
        })
    }

    // Read the new idea body and replace it
    // Return the updated idea
}

//Delete the idea
exports.deleteIdea = (req, res)=>{

    //Fetch the idea and see if it's present
    idea_id = req.params.id

    if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message : "Yay, you idea has been successfully deleted"
        })
    }else{
       return res.status(404).send({
        message : "Idea id you wanted to delete is already not present boss !"
       })
    }

   
}