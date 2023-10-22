import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pengalaman extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    perusahaan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sebagai: {
      type: DataTypes.STRING,
      allowNull: false
    },
    keterangan: {
      type: DataTypes.STRING,
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
    tableName: 'pengalaman',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pengalaman_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
