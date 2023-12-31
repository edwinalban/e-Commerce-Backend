const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Find all categories
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    })
    res.json(allCategories)
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get('/:id', async (req, res) => {
  // Find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.json(category);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post('/', async (req, res) => {
  // Create a new category
  try {
    await Category.create({
      category_name: req.body.category_name
    })
    res.status(201).json(`Created ${req.body.category_name} Category`);
  } catch (e) {
    res.status(500).json({ message: `Error creating ${req.body.category_name}` });
  }
});

router.put('/:id', async (req, res) => {
  // Update a category by its `id` value
  try {
    await Category.update({
      category_name: req.body.category_name
    },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json({ message: `Category Updated!` });
  } catch (e) {
    res.status(500).json({ message: `Error updating Category` });
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a category by its `id` value
  try {
    await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json({ message: `Category Deleted!` });
  } catch (e) {
    res.status(500).json({ message: `Error deleting Category` });
  }
});

module.exports = router;
