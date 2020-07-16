import { Request, Response } from 'express';

function getUser(req: Request, res: Response, u: string) {
  const result = {
    data: { user: 'Yes u got it!' },
    success: true,
  };

  return res.json(result);
}

function postUser(req: Request, res: Response, url: string, body: Request) {
  const result = {
    data: { user: 'Yes u got it!' },
    success: true,
  };

  return res.json(result);
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/user': getUser,
  'POST /api/user': postUser,
};
