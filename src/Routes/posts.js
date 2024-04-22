import express from "express";
import bodyParser from "body-parser";

const postRouter = express.Router();

postRouter.use(bodyParser.json()); // to use body object in requests

/**
 * @swagger
 *  tags:
 *    name: 主题曲创作
 *    description: API Endpoint：https://sora12306.com/music/, token：eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza2V5IjoidGhyZWUgcGFydHkiLCJ1c2VySWQiOiIxNzgwNDk5MzQ3NTgyOTUxNDI0In0.Yw2s7JhnyCt2kfxWtmRG949l6frkfBwy6lCjAEzf9h8，将token设置在header中，字段名为token
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Webhook参数:
 *       type: object
 *       properties:
 *         resultJson:
 *           type: string
 *           description: 业务处理字段，可以是id，也可以是一段任何内容，用于回调过程中处理业务逻辑
 *         musicId:
 *           type: string
 *           description: 音乐ID
 *         musicName:
 *           type: string
 *           description: 歌曲名称
 *         musicDuration:
 *           type: int
 *           description: 时长（单位为：秒）
 *         musicAudio:
 *           type: string
 *           description: 音频链接
 *         musicIcon:
 *           type: string
 *           description: 图标链接
 *         musicContent:
 *           type: string
 *           description: 歌词
 *         scene:
 *           type: string
 *           description: 场景 1 浪漫主题曲 2 婚礼进行曲 3 青春纪念曲
 *
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
 *         - description
 *         - webhook
 *         - resultJson
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
 *         webhook:
 *           type: string
 *           description: 回调地址
 *         resultJson:
 *           type: string
 *           description: 业务处理字段，可以是id，也可以是一段任何内容，用于回调过程中处理业务逻辑
 *       example:
 *         name: 武大郎
 *         loverName: 潘金莲
 *         style: Pop Music
 *         description: 含恨而终
 *         webhook: https://sora12306.com/music/system/music/webhook
 *         resultJson: "{type: 'music', id: 123}"
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
 *         - marryPlace
 *         - marryMode
 *         - description
 *         - webhook
 *         - resultJson
 *       properties:
 *         name:
 *           type: string
 *           description: 新郎名字
 *         loverName:
 *           type: string
 *           description: 新娘名字
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
 *         webhook:
 *           type: string
 *           description: 回调地址
 *         resultJson:
 *           type: string
 *           description: 业务处理字段，可以是id，也可以是一段任何内容，用于回调过程中处理业务逻辑
 *       example:
 *         name: 武大郎
 *         loverName: 潘金莲
 *         marryPlace: 广场上
 *         marryMode: 中式
 *         style: Pop Music
 *         description: 大饼摊前相识
 *         webhook: https://sora12306.com/music/system/music/webhook
 *         resultJson: "{type: 'music', id: 123}"
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
 *         - style
 *         - description
 *         - webhook
 *         - resultJson
 *       properties:
 *         name:
 *           type: string
 *           description: 男生名字
 *         style:
 *           type: string
 *           description: 歌曲风格
 *           default: Pop Music
 *         description:
 *           type: string
 *           description: 生日愿望
 *         webhook:
 *           type: string
 *           description: 回调地址
 *         resultJson:
 *           type: string
 *           description: 业务处理字段，可以是id，也可以是一段任何内容，用于回调过程中处理业务逻辑
 *       example:
 *         name: 武大郎
 *         style: Pop Music
 *         description: 秽土转生
 *         webhook: https://sora12306.com/music/system/music/webhook
 *         resultJson: "{type: 'music', id: 123}"
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
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *           example: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza2V5IjoidGhyZWUgcGFydHkiLCJ1c2VySWQiOiIxNzgwNDk5MzQ3NTgyOTUxNDI0In0.Yw2s7JhnyCt2kfxWtmRG949l6frkfBwy6lCjAEzf9h8
 *         description: Authentication token
 *         required: true
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

/**
 * @swagger
 * /system/music/wx/createWeddingSong:
 *   post:
 *     summary: 婚礼进行曲
 *     tags: [主题曲创作]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *           example: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza2V5IjoidGhyZWUgcGFydHkiLCJ1c2VySWQiOiIxNzgwNDk5MzQ3NTgyOTUxNDI0In0.Yw2s7JhnyCt2kfxWtmRG949l6frkfBwy6lCjAEzf9h8
 *         description: Authentication token
 *         required: true
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

/**
 * @swagger
 * /system/music/wx/createBirthdaySong:
 *   post:
 *     summary: 青春纪念曲
 *     tags: [主题曲创作]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *           example: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJza2V5IjoidGhyZWUgcGFydHkiLCJ1c2VySWQiOiIxNzgwNDk5MzQ3NTgyOTUxNDI0In0.Yw2s7JhnyCt2kfxWtmRG949l6frkfBwy6lCjAEzf9h8
 *         description: Authentication token
 *         required: true
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

export default postRouter;
