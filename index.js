import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import bodyParser from "body-parser";

// Import the router from the hello.js file
import postRouter from "./src/Routes/posts.js";
import helloRouter from "./src/hello.js";

// CDN CSS

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.10.4/swagger-ui.min.css";

const app = express();

app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2001;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "伶伦创音API",
      version: "1.0.0",
      description: `
      调用我们的接口时需提供webhook回调接口，由于音乐制作过程需要3三分钟左右，我们会在制作完成后调取webhook将数据回传给你们
      请在回调接口返回值中返回一个ok（模糊匹配，包含在哪一层都无所谓），我们收到ok后即认为回调已经成功，并停止继续调用你的接口，同时请设置好跨域访问
      webhook JAVA DEMO如下（本地调试webhook请使用ngrok等内网穿透工具，并提供公网接口）：
      @ApiOperation("音乐webhook回调接口")
      @PostMapping("/webhook")
      public AjaxResult musicWebHook(@RequestBody Map<String, Object> map) {
          String resultJson = (String) map.get("resultJson");
          if (resultJson.equals("123")) System.out.println("处理相关业务");
          String musicId = (String) map.get("musicId");
          String musicName = (String) map.get("musicName");
          Integer musicDuration = (Integer) map.get("musicDuration");
          String musicAudio = (String) map.get("musicAudio");
          String musicIcon = (String) map.get("musicIcon");
          String musicContent = (String) map.get("musicContent");
          String scene = (String) map.get("scene");
          System.out.println(resultJson + " " + musicId + " " + musicName + " " + musicDuration + " " + musicAudio + " " + musicIcon + " " + musicContent + " " + scene);
          return success("ok");
      }
        `,
    },
    servers: [
      {
        url: "https://sora12306.com/music",
        description: "伶伦创音API",
      },
    ],
  },
  // This is to call all the file
  apis: ["src/**/*.js"],
};

const specs = swaggerJsDoc(options);
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { customCssUrl: CSS_URL, })
);


// swaggerUI.setup(specs, {
//   customCssUrl: CSS_URL, customCss:
//       '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }'
// })

// Here we are calling the basic html
// Use the router from the hello.js file
app.use("/", helloRouter);
// Use the router from the post.js file
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));

// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";

// // Import the router from the hello.js file
// import postRouter from "./src/Routes/posts.js";
// import helloRouter from "./src/hello.js";

// //? CDN CSS
// const CSS_URL =
//   "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

// const app = express();

// app.use(bodyParser.json()); // to use body object in requests
// const PORT = process.env.PORT || 2000;
// dotenv.config();

// app.use(morgan("dev"));
// app.use(cors());

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       description: "A simple Express Library API",
//       termsOfService: "http://example.com/terms/",
//       contact: {
//         name: "API Support",
//         url: "http://www.exmaple.com/support",
//         email: "support@example.com",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:2000",
//         description: "My API Documentation",
//       },
//     ],
//   },
//   // This is to call all the file
//   apis: ["src/**/*.js"],
// };

// const specs = swaggerJsDoc(options);
// // app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// // custome css added!
// app.use("/public", express.static("public/swagger.css"));
// app.use(
//   "/api-docs",
//   swaggerUI.serve,
//   swaggerUI.setup(specs, { customCssUrl: "/public/swagger.css" && CSS_URL })
// );

// // Here we are calling the basic html
// // Use the router from the hello.js file

// //* All the routes goes here!
// app.use("/", helloRouter);

// // Use the router from the post.js file
// app.use("/posts", postRouter);

// //? This is for running the app
// app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
