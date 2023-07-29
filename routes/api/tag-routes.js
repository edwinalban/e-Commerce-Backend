const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product, as: "products" }]
    })
    res.json(allTags)
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, as: "products" }]
    })
    res.json(tag);
  } catch (e) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.json(newTag);
  } catch (e) {
    res.status(500).json({ message: `Error creating ${newTag}` });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tag_name
    },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(updateTag);
  } catch (e) {
    res.status(500).json({ message: `Error updating ${updateTag}` });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(deleteTag);
  } catch (e) {
    res.status(500).json({ message: `Error deleting ${deleteTag}` });
  }
});

module.exports = router;
