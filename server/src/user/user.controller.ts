import {Controller} from '../utils/request-handler.config';

export default Controller({
  async getUser(req, res) {
    return res.status(200).json(req.user);
  }
});
