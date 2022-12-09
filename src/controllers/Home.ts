// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

import {Request, Response} from "express";
import {ActionHelper} from "./helpers/ActionHelper";
import {WorkerHelper} from "./helpers/WorkerHelper";
import {SchedulerHelper} from "./helpers/SchedulerHelper";
import {SitemapHelper} from "./helpers/SitemapHelper";
import {Project} from "./helpers/ProjectConfigurationHelper";
import {loc} from "./helpers/LocalizationHelper";

import Componentindex from "./components/index";
import Component01e32c22 from "./components/home/feed/_01e32c22";
import Componentb0a33736 from "./components/welcome/_b0a33736";

export const index = (req: Request, res: Response) => {
  new Componentindex(req, res, "home/index");
}
export const _01e32c22 = (req: Request, res: Response) => {
  new Component01e32c22(req, res, "home/home/feed/_01e32c22");
}
export const _b0a33736 = (req: Request, res: Response) => {
  new Componentb0a33736(req, res, "home/welcome/_b0a33736");
}

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.