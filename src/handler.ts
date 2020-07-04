import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export const handler = (mapping: Record<string, NextApiHandler>) => (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (!mapping.hasOwnProperty(req.method)) {
    res.status(404).send("Not Found");
    return;
  }

  return mapping[req.method].apply(null, [req, res]);
};
