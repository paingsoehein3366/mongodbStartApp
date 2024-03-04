import data from "./../models/userModel.js";


export const loginRouter = async (req, res) => {
      try {
            const { email, password } = req.body;
            if (!email) {
                  return res.status(404).json("null email!");
            } else if (!password) {
                  return res.status(404).json("null password!");
            }
            const dbFromData = await data.find();
            const checkData = dbFromData.filter(item => item.email === email).map(item => item.password === password);

            console.log("checkEmail: ", checkData);

            res.status(200).json({
                  status: "successful",
                  data: {
                        email, password
                  }
            })
      } catch (error) {
            res.status(404).json({
                  status: "fail login",
                  message: error
            })
      }
};


export const getAllData = async (req, res) => {
      try {
            res.status(200).json({
                  status: "success",
                  data: data
            })
      } catch (error) {
            res.status(404).json({
                  status: "fail",
                  message: error
            });
      };
};

export const createAccount = async (req, res) => {

      try {
            const { name, phoneNumber, email, age, password } = req.body;
            if (!name) {
                  return res.status(404).json({
                        status: "Enter name"
                  })
            } else if (!phoneNumber) {
                  return res.status(404).json({
                        status: "Enter phoneNumber"
                  })
            } else if (!email) {
                  return res.status(404).json({
                        status: "Enter email"
                  })
            } else if (!age) {
                  return res.status(404).json({
                        status: "Enter age"
                  })
            } else if (!password) {
                  return res.status(404).json({
                        status: "Enter password"
                  })
            };
            const newAccount = await data.create({ name, phoneNumber, email, age, password });
            console.log("NewAccount: ", newAccount);
            res.status(200).json({
                  status: "success",
                  data: newAccount
            })
      } catch (error) {
            res.status(404).json({
                  status: "new account fail",
                  message: error
            })
      }

}