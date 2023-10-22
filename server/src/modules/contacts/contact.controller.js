import models from '../../model/init-models.js';

export const getAllContacts = async (req, res) => {
  try {
    const data = await models.contact.findAll();

    res.status(200).json({
      message: 'Get all contacts success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const data = await models.contact.findOne({
      where: {
        id: +req.params.id,
      },
    });

    if (!data) {
      return res.status(200).json({
        message: `Failed to get contact by id ${+req.params.id}`,
        data,
      });
    }

    res.status(200).json({
      message: 'Get contact by id success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  try {
    const { nama, no_hp, pesan, createdat } = req.body;

    const data = await models.contact.create(
      {
        nama,
        no_hp,
        pesan,
        createdat: new Date(),
      },
      {
        returning: true,
      }
    );

    res.status(201).json({
      message: 'Create contact success',
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
