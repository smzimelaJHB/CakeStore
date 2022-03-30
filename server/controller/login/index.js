const login = require('../../model/register');
const bcrypt = require('bcryptjs');

// retrieve and return all users/ retrive and return a single user
exports.find = async(req, res) => {

    if (req.body.email) {
        const id = req.body.email;

        login.findOne({ 'email': id }, 'name email password')
            .then(async(data) => {
                if (!data) {
                    await res.status(404).send({ message: "No user with email: " + id })
                } else {
                    const ispass = await bcrypt.compare(req.body.password, data.password);
                    if (ispass && data.email == "admin@admin.com") {
                        return await res.redirect("/product");
                    } else if (ispass) {
                        return await res.redirect("/contact")
                            // return await res.status(200).send(data);
                    }
                    await res.status(200).send("Wrong password: Re enter or reset password!");
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with email " + id })
            })

    } else {
        res.status(404).send("You didn't enter email")
    }

}

// Delete a user with specified user id in the request
exports.delete = async(req, res) => {
    const id = req.params.id;

    login.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}