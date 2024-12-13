import express from 'express';
import commentController from '#containers/comment.container.js';
import userController from '#containers/user.container.js';

export const devRouter = express.Router();

devRouter.get('/users', userController.getUsersDev);

devRouter.get('/comments', commentController.getCommentsDev);

devRouter.get('/error', async (req, res) => {
  throw new Error('TEST ERROR');
});

devRouter.post('/files', (req, res, next) => {
  console.log(req.file);
  const path = `/dev/files/${req.file!.filename}`;
  res.json({ message: 'File Uploaded' });
});

export default devRouter;
