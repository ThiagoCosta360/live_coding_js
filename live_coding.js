// read db.json
const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

const createUser = (name, last_name, password) => {
    username = name + "_" + last_name;
    const user = {
        id: db.users.length + 1,
        username,
        email: username + "@gmail.com",
        password,
    };
    db.users.push(user);
    return user;
};
