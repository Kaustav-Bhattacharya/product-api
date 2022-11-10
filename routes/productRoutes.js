import { client } from "../db/connection.js";
import {
  getprod,
  getProdWithId,
  checkEmail,
  addProd,
  updateProd,
  deleteProd,
} from "./query.js";

export const getProducts = (req, res) => {
  client.query(getprod, (error, result) => {
    if (error) return res.status(400).send(error);

    res.status(200).send(result.rows);
  });
};

export const postProduct = (req, res) => {
  const data = req.body;
  const {
    id,
    name,
    sku,
    brand,
    category,
    manufacturer,
    hsncode,
    weight,
    dimension,
  } = data;
  client.query(checkEmail, [name], (error, result) => {
    if (error) {
      res.status(500).send(error);
    }
    client.query(addProd,[id,name,sku,brand,category,manufacturer,hsncode,weight,dimension],(error, result) => {
        if (error) throw error;
        res.status(200).json({
          success: true,
          product: data,
        });
      }
    );
  });
};

export const getProductWithId = (req, res) => {
  const id = req.params.id;
  client.query(getProdWithId, [id], (error, result) => {
    if (error) return res.status(400).send(error);

    res.status(200).send(result.rows);
  });
};

export const deleteProduct = (req, res) => {
  const id = req.params.id;
  client.query(deleteProd, [id], (error, result) => {
    if (error) return res.status(400).send(error);
    res.status(200).send({
      success: true,
      msg: `Data deleted from DataBase`,
    });
  });
};

export const updateProduct = async (req, res) => {
  const reqId = req.params.id;
  const {
    id,
    name,
    sku,
    brand,
    category,
    manufacturer,
    hsnCode,
    weight,
    dimension,
  } = req.body;
  client.query(
    updateProd,
    [
      id,
      name,
      sku,
      brand,
      category,
      manufacturer,
      hsnCode,
      weight,
      dimension,
      reqId
    ],
    (error, result) => {
      if (error) return res.status(400).send(error);

      res.status(201).send(`Filds Updated`);
    }
  );
};
