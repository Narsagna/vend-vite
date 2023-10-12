// what does controller .js do?

import pool from '../../db.js';
import queries from './queries.js';


// Crud

const addProduct = (req, res) => {
    const { product_name, product_desc, product_price, product_link, product_thumbnail, product_file, timestamp} = req.body; // all table coulums except id
// check if the entry already exists
pool.query(queries.checkProductExists, [product_name], (error, results) => {
    if(results.rows.length) {
        res.send("Product already exists");
    }
    // else add product
    pool.query(queries.addProduct, [product_name, product_desc, product_price, product_link, product_thumbnail, product_file, timestamp], (error, results) => {
        if(error) throw error;
        res.status(201).send("Product created successfully"); 
    });
});
}

// cRud

const getProduct = (req, res) => {
pool.query(queries.getProduct, (error, results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
});
}

//cRud by id

const getProductById = (req, res) => {
    const id = parseInt(req.params.id, 10); // Adding the radix (10 in this case) specifies that the string should be parsed as a base-10 integer
    pool.query(queries.getProductById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

// crUd by id

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id, 10); // Adding the radix (10 in this case) specifies that the string should be parsed as a base-10 integer
    const { product_name, product_desc, product_price } = req.body; // NOTE: unable to update file url, file upload and other stuff
    // check if product exixts in the first place
    pool.query(queries.getProductById, [id], (error, results) => {
        const noProductFound = !results.rows.length;
        if(noProductFound) {
            res.send("Product does not exist, could not update");
        }
        // else update the product
        pool.query(queries.updateProduct, [product_name, product_desc, product_price, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Product updated successfully"); 
        });
    });
}

// cruD by id

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id, 10); // Adding the radix (10 in this case) specifies that the string should be parsed as a base-10 integer
    // check if product exixts in the first place
    pool.query(queries.getProductById, [id], (error, results) => {
        const noProductFound = !results.rows.length;
        if(noProductFound) {
            res.send("Product does not exist, could not delete");
        }
        // else delete the product
        pool.query(queries.deleteProduct, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Product was deleted successfully");
        });
    });
}


export default { 
    addProduct,
    getProduct, 
    getProductById,
    updateProduct,
    deleteProduct,
    };