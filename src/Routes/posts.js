import express from "express";
import bodyParser from "body-parser";
import data from "../Data/data.js";

const postRouter = express.Router();

postRouter.use(bodyParser.json()); // to use body object in requests

/**
 * @swagger
 *  tags:
 *    name: 主题曲创作
 *    description: API Endpoint：https://sora12306.com/music/, TOKEN：eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza2V5IjoidGhyZWUgcGFydHkiLCJ1c2VySWQiOiIxNzgwNDk5MzQ3NTgyOTUxNDI0In0.Yw2s7JhnyCt2kfxWtmRG949l6frkfBwy6lCjAEzf9h8
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LoveSong:
 *       type: object
 *       required:
 *         - name
 *         - loverName
 *         - style
 *       properties:
 *         name:
 *           type: string
 *           description: 男生名字
 *         loverName:
 *           type: string
 *           description: 女生名字
 *         style:
 *           type: string
 *           description: 歌曲风格
 *           default: Pop Music
 *         description:
 *           type: string
 *           description: 两人的经历或一些难忘的事
 *       example:
 *         name: 武大郎
 *         loverName: 潘金莲
 *         style: Pop Music
 *         description: 含恨而终
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     WeddingSong:
 *       type: object
 *       required:
 *         - name
 *         - loverName
 *         - style
 *       properties:
 *         name:
 *           type: string
 *           description: 新郎名字
 *         loverName:
 *           type: string
 *           description: 新娘名字
 *         meetDate:
 *           type: date
 *           description: 第一次心动日期
 *         marryDate:
 *           type: date
 *           description: 婚礼日期
 *         marryPlace:
 *           type: string
 *           description: 婚礼场所
 *         marryMode:
 *           type: string
 *           description: 婚礼形式
 *         style:
 *           type: string
 *           description: 歌曲风格
 *           default: Pop Music
 *         description:
 *           type: string
 *           description: 两人的经历或一些难忘的事
 *       example:
 *         name: 武大郎
 *         loverName: 潘金莲
 *         style: Pop Music
 *         description: 含恨而终
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     BirthdaySong:
 *       type: object
 *       required:
 *         - name
 *         - loverName
 *         - style
 *       properties:
 *         name:
 *           type: string
 *           description: 男生名字
 *         birthDate:
 *           type: date
 *           description: 出生日期
 *         style:
 *           type: string
 *           description: 歌曲风格
 *           default: Pop Music
 *         description:
 *           type: string
 *           description: 生日愿望
 *       example:
 *         name: 武大郎
 *         birthDate: 2020-10-22
 *         style: Pop Music
 *         description: 秽土转生
 *
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Result:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: 返回结果，歌曲id
 *         code:
 *           type: integer
 *           description: 响应编码
 *       example:
 *         msg: XxjYgGzHEaFaMYxMccAKs2VtvRPvmv8U
 *         code: 200
 *
 */

/**
 * @swagger
 * /system/music/wx/createLoveSong:
 *   post:
 *     summary: 浪漫主题曲
 *     tags: [主题曲创作]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoveSong'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 *       500:
 *         description: Some server error
 */

postRouter.post("/system/music/wx/add", (req, res) => {
  try {
    const post = {
      ...req.body,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 * /system/music/wx/createWeddingSong:
 *   post:
 *     summary: 婚礼进行曲
 *     tags: [主题曲创作]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WeddingSong'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 *       500:
 *         description: Some server error
 */

postRouter.post("/system/music/wx/add2", (req, res) => {
  try {
    const post = {
      ...req.body,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 * /system/music/wx/createBirthdaySong:
 *   post:
 *     summary: 青春纪念曲
 *     tags: [主题曲创作]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BirthdaySong'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Result'
 *       500:
 *         description: Some server error
 */

postRouter.post("/system/music/wx/add3", (req, res) => {
  try {
    const post = {
      ...req.body,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default postRouter;
