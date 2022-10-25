express = require('express');
import { Request } from "express"
import { Response } from "express"

async function getById(req: Request, res: Response);
async function getAll(req: Request, res: Response);
async function create(req: Request, res: Response);
async function updateById(req: Request, res: Response);
async function deleteById(req: Request, res: Response);

