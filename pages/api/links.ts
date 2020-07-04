import { handler } from "../../src/handler";
import { getConnection } from "typeorm";
import { Link } from "../../entities/Link";

export default handler({
  async GET(req, res) {
    const db = await getConnection();

    const repo = db.getRepository(Link);

    const links = await repo.find();

    res.json(links);
  },
});
