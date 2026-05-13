import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T;
    isDefault?: string;
  }
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    meta: jsonData.meta ?? null,
    data: jsonData.data ?? null,
    isDefault: jsonData.isDefault ?? null,
  });
};



export default sendResponse;