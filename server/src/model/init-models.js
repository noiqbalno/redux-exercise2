import _sequelize, { Sequelize } from 'sequelize';
const DataTypes = _sequelize.DataTypes;
import _contact from './contact.js';
import _organisasi from './organisasi.js';
import _pendidikan from './pendidikan.js';
import _pengalaman from './pengalaman.js';
import _posts from './posts.js';
import _users from './users.js';

const sequelize = new Sequelize(
  process.env.DB_NM,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

function initModels(sequelize) {
  const contact = _contact.init(sequelize, DataTypes);
  const organisasi = _organisasi.init(sequelize, DataTypes);
  const pendidikan = _pendidikan.init(sequelize, DataTypes);
  const pengalaman = _pengalaman.init(sequelize, DataTypes);
  const posts = _posts.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  organisasi.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(organisasi, { as: 'organisasis', foreignKey: 'user_id' });
  pendidikan.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(pendidikan, { as: 'pendidikans', foreignKey: 'user_id' });
  pengalaman.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(pengalaman, { as: 'pengalamans', foreignKey: 'user_id' });
  posts.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(posts, { as: 'posts', foreignKey: 'user_id' });

  return {
    contact,
    organisasi,
    pendidikan,
    pengalaman,
    posts,
    users,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };
