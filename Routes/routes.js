const express = require('express');
const Menu = require('../Model/Menu');

const route = express.Router();

route.post('/menu', async (req, res) => {
    try {
        // Extract request body
        const { name, description, price } = req.body;

        // Check for missing fields (400 Bad Request)
        if (!name || !description || !price) {
            return res.status(400).json({ message: "All fields (name, description, price) are required" });
        }

        // Validate price (422 Unprocessable Entity)
        if (typeof price !== 'number' || price <= 0) {
            return res.status(422).json({ message: "Price must be a positive number" });
        }

        // Create and save the menu item
        const menu = await Menu.create({ name, description, price });

        // Send success response
        return res.status(201).json({ message: "Menu item created successfully", data: menu });

    } catch (e) {
        // Handle server errors
        return res.status(500).json({ message: "Something went wrong", error: e.message });
    }
});

module.exports = route;
