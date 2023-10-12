const getProduct = "SELECT * FROM product";
const getProductById = "SELECT * FROM product WHERE id = $1";
const checkProductExists = "SELECT p FROM product p WHERE p.product_name = $1";
const addProduct = "INSERT INTO product (product_name, product_desc, product_price, product_link, product_thumbnail, product_file, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7)";
const deleteProduct = "DELETE FROM product WHERE id = $1";
const updateProduct = "UPDATE product SET product_name = $1, product_desc = $2, product_price = $3 WHERE id = $4";

export default { 
    checkProductExists,
    addProduct,
    getProduct, 
    getProductById, 
    updateProduct,
    deleteProduct,   
};