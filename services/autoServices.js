import Auto from "../models/Auto.js";

export const getAuto = () => Auto.find(); 

export const getAutoById = (id) => Auto.findById(id);

export const addAuto = (data) => Auto.create(data);

export const removeAuto = (id) => Auto.findByIdAndDelete(id);