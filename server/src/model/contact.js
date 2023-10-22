import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class contact extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdat: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedat: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'contact',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "contact_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
