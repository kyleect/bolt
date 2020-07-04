import { handler } from "../../src/handler";
import { getConnection } from "typeorm";
import { Post } from "../../entities/Post";

export default handler({
  async GET(req, res) {
    const db = await getConnection();

    const repo = db.getRepository(Post);

    const posts = await repo.find();

    res.json(posts);
  },
});
