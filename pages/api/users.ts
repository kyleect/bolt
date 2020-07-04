import { handler } from "../../src/handler";
import { getConnection } from "typeorm";
import { User } from "../../entities/User";

export default handler({
  async GET(req, res) {
    const db = await getConnection();

    const repo = db.getRepository(User);

    const users = await repo.find();

    res.json(users);
  },
});
