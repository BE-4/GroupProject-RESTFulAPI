# API Documentation

## _Endpoint Psikolog_

- Router :

  ```js
  const express = require("express");
  const router = express.Router();

  const { getAllPsikolog, addPsikolog, updatePsikolog, deletePsikolog } = require("../controllers/psikolog.controller");

  router.get("/", getAllPsikolog);
  router.post("/", addPsikolog);
  router.patch("/:id", updatePsikolog);
  router.delete("/:id", deletePsikolog);

  module.exports = router;
  ```

- Model :

  ```js
  const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const psikologSchema = new Schema({
    nama: {
      required: true,
      type: String,
    },
    pengalaman: {
      required: true,
      type: String,
    },
  });

  const Psikolog = mongoose.model("Psikolog", psikologSchema);

  module.exports = Psikolog;
  ```

- Controller :

  - getAllPsikolog (Menampilkan semua list psikolog) :

    ```js
        getAllPsikolog: async (req, res) => {
    try {
        const psikolog = await Psikolog.find({}, "-password -__v");

        res.status(200).json({
        message: "success get data psikolog",
        data: psikolog,
        });
    } catch (error) {
        console.log(error);
    }
    },
    ```

    ![img](getallpsikolog.jpg)

  - getDetailPsikolog (Mendapatkan detail dari masing-masing psikolog berdasarkan id) :

    ```js
    try {
      const { id } = req.params;
      const psikolog = await Psikolog.findById(id, "-__v -_id");

      res.status(200).json({
        message: "success get data user",
        data: psikolog,
      });
    } catch (error) {
      console.log(error);
    }
    ```
    ![img](getdetailpsikolog.jpg)

  - addPsikolog (Menambahkan data psikolog baru) :

    ```js
    addPsikolog: (req, res) => {
    const data = req.body;
    const psikolog = new Psikolog(data);

    psikolog.save();

    res.status(200).json({
      message: "Psikolog baru berhasil ditambahkan !",
    });
    },
    ```

    ![img](addpsikolog.jpg)

  - updatePsikolog (Mengupdate data psikolog berdasarkan id) :

    ```js
    updatePsikolog: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const psikolog = await Psikolog.findByIdAndUpdate(id, data);

    await psikolog.save();

    res.status(200).json({
      message: "Data berhasil di Update !",
    });

    psikolog.save();
    },
    ```

    ![img](updatepsikolog.jpg)

    - Setelah kita update dan get data kembali :

    ![img](afterupdate.jpg)

  - deletePsikolog (Menghapus psikolog berdasarkan id) :

    ```js
    deletePsikolog: async (req, res) => {
      const { id } = req.params;
      const psikolog = await Psikolog.findById(id);

      await psikolog.remove();
      res.json({
        message: "Data yang dipilih berhasil dihapus !",
        data: "terhapus",
      });
    };
    ```

    ![img](deletepsikolog.jpg)

    - Setelah kita melakukan delete data dan get data kembali :

    ![img](afterdelete.jpg)
# API Documentation

## _Endpoint Psikolog_

- Router :

  ```js
  const express = require("express");
  const router = express.Router();

  const { getAllPsikolog, addPsikolog, updatePsikolog, deletePsikolog } = require("../controllers/psikolog.controller");

  router.get("/", getAllPsikolog);
  router.post("/", addPsikolog);
  router.patch("/:id", updatePsikolog);
  router.delete("/:id", deletePsikolog);

  module.exports = router;
  ```

- Model :

  ```js
  const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const psikologSchema = new Schema({
    nama: {
      required: true,
      type: String,
    },
    pengalaman: {
      required: true,
      type: String,
    },
  });

  const Psikolog = mongoose.model("Psikolog", psikologSchema);

  module.exports = Psikolog;
  ```

- Controller :

  - getAllPsikolog (Menampilkan semua list psikolog) :

    ```js
        getAllPsikolog: async (req, res) => {
    try {
        const psikolog = await Psikolog.find({}, "-password -__v");

        res.status(200).json({
        message: "success get data psikolog",
        data: psikolog,
        });
    } catch (error) {
        console.log(error);
    }
    },
    ```

    ![img](getallpsikolog.jpg)

  - getDetailPsikolog (Mendapatkan detail dari masing-masing psikolog berdasarkan id) :

    ```js
    try {
      const { id } = req.params;
      const psikolog = await Psikolog.findById(id, "-__v -_id");

      res.status(200).json({
        message: "success get data user",
        data: psikolog,
      });
    } catch (error) {
      console.log(error);
    }
    ```
    ![img](getdetailpsikolog.jpg)

  - addPsikolog (Menambahkan data psikolog baru) :

    ```js
    addPsikolog: (req, res) => {
    const data = req.body;
    const psikolog = new Psikolog(data);

    psikolog.save();

    res.status(200).json({
      message: "Psikolog baru berhasil ditambahkan !",
    });
    },
    ```

    ![img](addpsikolog.jpg)

  - updatePsikolog (Mengupdate data psikolog berdasarkan id) :

    ```js
    updatePsikolog: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const psikolog = await Psikolog.findByIdAndUpdate(id, data);

    await psikolog.save();

    res.status(200).json({
      message: "Data berhasil di Update !",
    });

    psikolog.save();
    },
    ```

    ![img](updatepsikolog.jpg)

    - Setelah kita update dan get data kembali :

    ![img](afterupdate.jpg)

  - deletePsikolog (Menghapus psikolog berdasarkan id) :

    ```js
    deletePsikolog: async (req, res) => {
      const { id } = req.params;
      const psikolog = await Psikolog.findById(id);

      await psikolog.remove();
      res.json({
        message: "Data yang dipilih berhasil dihapus !",
        data: "terhapus",
      });
    };
    ```

    ![img](deletepsikolog.jpg)

    - Setelah kita melakukan delete data dan get data kembali :

    ![img](afterdelete.jpg)
