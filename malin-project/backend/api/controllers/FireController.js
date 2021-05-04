const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Fire = require('../models/Fire');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const FireController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Fire,
        values: {
          id: entry.global_id,
          month: entry.Month,
          admArea: entry.AdmArea,
          calls: entry.Calls,
          year: entry.Year,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let fires;

      if (req.query.name) {
        fires = await Fire.findAll({
          where: {
            name: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        fires = await Fire.findAll();
      }

      return res.status(200).json({ fires });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = FireController;
