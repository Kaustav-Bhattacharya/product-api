export const getprod = "SELECT * FROM godamwale";
export const getProdWithId = "SELECT * FROM godamwale WHERE id = $1";
export const checkEmail = "SELECT s FROM godamwale s WHERE s.name = $1";
export const addProd =
  "INSERT INTO godamwale (id,name,sku,brand,category,manufacturer,hsncode,weight,dimension) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)";
export const deleteProd = "DELETE FROM godamwale WHERE id=$1";

export const updateProd =
  "UPDATE godamwale SET id=$1, name=$2, sku=$3, brand=$4, category=$5, manufacturer=$6 hsnCode=$7, weight=$8, dimension=$9 WHERE id=$10";
