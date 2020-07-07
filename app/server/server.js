// const express = require("express");
// const app = express();
// const PORT = 8080;

// // handle parsing request body
// app.use(express.json());
// // cookie parser
// app.use(cookieParser());

// // statically serve everything in build folder
// app.use("/", express.static(path.resolve(__dirname, "../dist")));

// // serves main app, we are going to serve main app to electron locally, this will be deprecated
// // this backend server will only be used for authentication and project management services
// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "../build/index.html"));
// });

// // catch-all route handler
// app.use("*", (req, res) => {
//   return res.status(404).send("Page not found");
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.log("invoking global error handler");
//   const defaultErr = {
//     log: "Express error handler caught unknown middleware",
//     status: 500,
//     message: { err: "An error occurred" },
//   };

//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });
