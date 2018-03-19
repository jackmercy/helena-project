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
     * @property {string} res.body.password - Password of user
     * @returns {JSON}
     */
    var postLogin = function(req, res) {
        var user = new User(req.body);

        if(!req.body.username) {
            res.status(400);
            res.send('Username is required');
        } else if(!req.body.password) {
            res.status(400);
            res.send('Password is required');
        }
        
        // handle login request in mongodb - should move those lines into model method
        // see documentation at : http://mongoosejs.com/docs/guide.html
        User.findOne({username: user.username}, function(err, user) {
            if(err) {
                console.log('ERR');
            }
            else {
                res.status(200);
                /* delete user.password
                delete user._id */ // cound not work - wtf
                const res_user = {
                    username: user.username,
                    name: user.name
                }
                res.json(res_user);
            }
        });
    }

    return {
        getUser: getUser,
        login: postLogin
    }
}

module.exports = userController;