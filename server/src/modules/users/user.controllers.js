import bcrypt from 'bcrypt';
import models from '../../model/init-models.js';
import jwt from 'jsonwebtoken';

export const getAllUser = async (req, res) => {
  try {
    const result = await models.users.findAll({
      order: [['id', 'DESC']],
      include: [
        {
          model: models.pendidikan,
          as: 'pendidikans',
          attributes: ['id', 'jenis', 'nama_pendidikan', 'order'],
        },
        {
          model: models.organisasi,
          as: 'organisasis',
          attributes: ['id', 'organisasi'],
        },
        {
          model: models.pengalaman,
          as: 'pengalamans',
          attributes: ['id', 'perusahaan', 'sebagai', 'keterangan'],
        },
      ],
    });
    res.status(200).json({
      message: 'Get all users success',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const {
      username,
      password,
      role,
      nama,
      alamat,
      pendidikan,
      organisasi,
      pengalaman,
    } = req.body;

    const saltRounds = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const dataUser = {
      username,
      password: hashedPassword,
      role,
      nama,
      alamat,
      createdat: new Date(),
    };

    const createUser = await models.users.create(dataUser);

    pendidikan.forEach((element) => {
      element.user_id = createUser.id;
      element.createdat = new Date();
    });
    organisasi.forEach((element) => {
      element.user_id = createUser.id;
      element.createdat = new Date();
    });
    pengalaman.forEach((element) => {
      element.user_id = createUser.id;
      element.createdat = new Date();
    });

    const createPendidikan = await models.pendidikan.bulkCreate(pendidikan);

    const createOrganisasi = await models.organisasi.bulkCreate(organisasi);
    const createPengalaman = await models.pengalaman.bulkCreate(pengalaman);

    res.status(201).json({
      message: 'Data user created',
      user: createUser,
      pendidikan: createPendidikan,
      organisasi: createOrganisasi,
      pengalaman: createPengalaman,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const data = await models.users.findOne({
      include: [
        {
          model: models.pendidikan,
          as: 'pendidikans',
          attributes: ['id', 'jenis', 'nama_pendidikan', 'order'],
        },
        {
          model: models.organisasi,
          as: 'organisasis',
          attributes: ['id', 'organisasi', 'sebagai'],
        },
        {
          model: models.pengalaman,
          as: 'pengalamans',
          attributes: ['id', 'perusahaan', 'sebagai', 'keterangan'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      message: 'Get data by id success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkUsername = await models.users.findOne({
      where: {
        username: username,
      },
    });

    if (!checkUsername) {
      return res.status(400).json({ message: 'Username atau Password Salah' });
    }

    const checkPassword = await bcrypt.compare(
      password,
      checkUsername.password
    );

    if (!checkPassword) {
      return res.status(400).json({ message: 'Username atau Password Salah' });
    }

    const token = jwt.sign(
      {
        id: checkUsername.id,
        username: checkUsername.username,
        role: checkUsername.role,
        createdat: checkPassword.createdat,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '30d',
      }
    );

    const result = {
      accessToken: token,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
