var userController = function(User)  {
    /**
     * get all user information
     * @returns {User}
     */
    var getUser = function(req, res) {
        User.find(function(err, users) {
            if(err) {
                console.log('ERR');
            }
            else {
                console.log(users);
                res.json(users);
            }
        });
    }

    /**
     * Handle login request
     * @property {string} req.body.username - Username of user
     * @property {string} res.body.role - Password of user
     * @returns {JSON}
     */
    var postLogin = function(req, res) {
        var user = new User(req.body);

        if(!req.body.username) {
            res.status(400);
            res.send('Username is required');
        } else if(!req.body.role) {
            res.status(400);
            res.send('Role is required');
        }
        
        // handle login request in mongodb - should move those lines into model method
        // see documentation at : http://mongoosejs.com/docs/guide.html
        User.findOne({username: user.username, role: user.role}, function(err, user) {
            if(err) {
                console.log('ERR');
            }
            else {
                if(!user) {
                    res.status(400).send('No user is found');   
                }
                else {
                    res.status(200);
                    /* delete user.password
                    delete user._id */ // not work - wtf
                    const res_user = {
                        username: user.username,
                        name: user.role
                    }
                    res.json(res_user);
                }
            }
        });
    }

    return {
        getUser: getUser,
        login: postLogin
    }
}

module.exports = userController;