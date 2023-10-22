import models from '../../model/init-models.js';
export const getAllPosts = async (req, res) => {
  try {
    let status = req.query.status;
    let data;
    if (status) {
      status === 'active' ? true : false;
      data = await models.posts.findAll({
        include: 'user',
        order: [['id', 'DESC']],
        where: {
          active: status,
        },
      });
    } else {
      data = await models.posts.findAll({
        include: 'user',
        order: [['id', 'DESC']],
      });
    }

    res.status(200).json({
      message: 'Get all posts success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostsByStatus = async (req, res) => {
  try {
    const status = req.query.status;
    const data = await models.posts.findAll({
      include: 'user',
      order: [['id', 'DESC']],
      where: {
        active: status,
      },
    });

    res.status(200).json({
      message: 'Get posts by status success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const data = await models.posts.findOne({
      include: 'user',
      where: {
        id: +req.params.id,
      },
    });

    res.status(200).json({
      message: 'Get post by id success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { judul, deskripsi, user_id } = req.body;
    let image = req.body.image;

    if (!image) {
      image = 'https://via.placeholder.com/100';
    }

    const data = await models.posts.create(
      {
        judul,
        deskripsi,
        image,
        user_id,
        active: true,
        createdat: new Date(),
      },
      {
        returning: true,
      }
    );

    res.status(201).json({
      message: 'Create post success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { judul, deskripsi, image, user_id } = req.body;

    if (!image) {
      image = 'https://via.placeholder.com/100';
    }

    const data = await models.posts.update(
      {
        judul,
        deskripsi,
        image,
        user_id,
      },
      {
        where: {
          id: +req.params.id,
        },
        returning: true,
      }
    );

    data[0] === 1
      ? res.status(200).json({
          message: 'update post success',
          data: data[1][0],
        })
      : res.status(200).json({
          message: `Failed to update post with id ${+req.params.id}`,
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const activatePost = async (req, res) => {
  try {
    const data = await models.posts.update(
      {
        active: true,
      },
      {
        where: {
          id: +req.params.id,
        },
        returning: true,
      }
    );

    data[0] === 1
      ? res.status(200).json({
          message: 'Post activated',
        })
      : res.status(200).json({
          message: `Failed to activate post with id ${+req.params.id}`,
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deactivatePost = async (req, res) => {
  try {
    const data = await models.posts.update(
      {
        active: false,
      },
      {
        where: {
          id: +req.params.id,
        },
        returning: true,
      }
    );

    data[0] === 1
      ? res.status(200).json({
          message: 'Post deactivated',
        })
      : res.status(200).json({
          message: `Failed to deactivate post with id ${+req.params.id}`,
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const data = await models.posts.destroy({
      where: {
        id: +req.params.id,
      },
    });

    data === 1
      ? res.status(200).json({
          message: 'Delete post success',
        })
      : res.status(200).json({
          message: `Failed to delete post with id ${+req.params.id}`,
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
