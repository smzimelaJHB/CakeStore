const login = require('../../model/register');
const bcrypt = require('bcryptjs');


// Update password
exports.resetPassword = async (req, res,next)=>{
    let myid = " ";
    if(req.body.email && req.body.password){
        const id = req.body.email;

        if(req.body.password != req.body.password2)
            res.status(404).send("Password does not mathch!")

        login.findOne({'email':id},'name email password')
            .then(async (data) =>{
                if(await !data){
                    await res.status(404).send({ message : "No user with email: "+ id})
                }else{
    
                    await login.findByIdAndUpdate(data._id, req.body, { useFindAndModify: true})
                    .then(async (data2) => {
                        if(await !data2){
                             res.status(404).send({ message : `Cannot Update user with ${data._id}. Maybe user not found!`})
                        }else{
                            re.status(200).send("Action not possible at the moment");
                            // await login.findByIdAndUpdate(data2._id, data2, { useFindAndModify: true})
                            // .then(async (d)=>{res.send(d)}).catch(err=>{res.status(500).send("Internal errror",err)})
                        }
                    })
                    .catch(err =>{
                        res.status(500).send({ message : "Error Update user information",error:err})
                    })
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with email " + id,error: err})
            })

    }else{
        res.status(404).send("Some fields are empty! ")
    }

}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    register.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

