var express = require('express');
var router = express.Router();
var listHelper = require('../HELPER/listHelper');


/**     `localhost:4000/list/create`  ******/
/**********Select method `POST`   */
/***LIST data Json schema be like `{"listdata": "<listname>"}` */

router.post('/create', async (req, res) => {
    let body = req.body;
    console.log('body',body);
    let listResponse = await listHelper.createlist(body);
    console.log('RESPONSE IN CREATE', listResponse);
    res.json(listResponse);
});

/**     `localhost:4000/list/list`  *******/
/**********Select method `POST`   */

router.post('/list', async (req, res, next) => {
    let body = req.body;
    let listList = await listHelper.getListData(body);
    console.log('RESPONSE IN LIST', listList);
    res.json(listList);
});

/**     `localhost:4000/list/delete/<id>`  *******/
/**********Select method `DELETE`   */

router.delete("/delete/:id", async (req, res) => {
    let body = req.body;
    body.listId = req.params.id;
    let deleteList = await listHelper.deleteList(body);
    console.log('RESPONSE IN DELETE', deleteList);
    res.json(deleteList);
});


/**     `localhost:4000/list/update/<id>`  *******/
/**********Select method `PUT`   */
/***LIST data Json schema be like `{"listdata": "<listname>"}` */

router.put("/update/:id", async (req, res) => {
    let body = req.body;
    body.listId = req.params.id;
    let updateList = await listHelper.updateList(body);
    console.log('RESPONSE IN UPDATE', updateList);
    res.json(updateList);
});


// get details of using id
/*****    `localhost:4000/list/getDetails/<id>`  *******/
/**********Select method `GET`   */

router.get("/getDetails/:id",  async (req, res) => {
    let listId = req.params.id;
    let editList = await listHelper.getListDetailsUsingId(listId);
    res.json(editList);
});

/**     `localhost:4000/list/updateStatus/<id>`  *******/
/**********Select method `PUT`   */
/***LIST data Json schema be like `{"status": "<boolean>"}` */

router.put('/updateStatus/:id', async (req, res, next) => {
    let body = req.body;
    body.listId = req.params.id;
    let updateStatus = await listHelper.updateStatus(body);
    res.json(updateStatus);
});

module.exports = router;