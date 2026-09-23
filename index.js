require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5000;
app.listen(3000, () => {
    console.log(`Express Server running on port ${PORT}`);
});