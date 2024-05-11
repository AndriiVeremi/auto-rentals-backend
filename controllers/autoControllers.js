import * as autoServices from "../services/autoServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllAuto = async (req, res) => {
  const result = await autoServices.getAuto();
  res.json(result);
};

const getOneAuto = async (req, res) => {
  const { id } = req.params;
  const result = await autoServices.getAutoById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createAuto = async (req, res) => {
  const result = await autoServices.addAuto(req.body);
  res.status(201).json(result);
};

const deleteAuto = async (req, res) => {
    const { id } = req.params;
    const result = await autoServices.removeAuto(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  };

export default {
  getAllAuto: ctrlWrapper(getAllAuto),
  getOneAuto: ctrlWrapper(getOneAuto),
  createAuto: ctrlWrapper(createAuto),
  deleteAuto: ctrlWrapper(deleteAuto),
};
