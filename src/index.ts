import * as express from "express";
import { Request, Response } from "express";

import Hello from "@/hello";

const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send(new Hello().sayHello());
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default Hello;
