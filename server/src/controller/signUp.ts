import express, { NextFunction, Request, Response } from "express";

export = (req: Request, res: Response) => {
  try {
    console.log("hello");
  } catch (err) {
    console.log(err);
  }
};
