const express = require('express')

const router = express.Router();

const constant = require('../constant/response');
const helper = require('../helper/response');
const UserModel = require('../models/users');

const getAllUsers = async(req, res) => {
    try {
        const data = await UserModel.getAllUsers();
        return helper.ResponseAPI(res, constant.RES_200_GET, data);
    } catch (error) {
        console.log(error);
        return helper.ResponseAPI(res, constant.RES_422_SOMETHING_WRONG);
    }
}

const createNewUsers = async(req, res) => {
    const {body} = req;

    if(!body.name || !body.email || !body.address){
        return helper.ResponseAPI(res, constant.RES_400_INVALID_PAYLOAD);
    }

    try {
        await UserModel.createNewUser(body);
        return helper.ResponseAPI(res, constant.RES_201_SAVE);
    } catch (error) {
        console.log(error);
        return helper.ResponseAPI(res, constant.RES_422_SOMETHING_WRONG);
    }
}

const updateUsers = async(req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser);
        return helper.ResponseAPI(res, constant.RES_200_UPDATE);
    } catch (error) {
        console.log(error);
        return helper.ResponseAPI(res, constant.RES_422_SOMETHING_WRONG);
    }
}

const deleteUsers = async(req, res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);
        return helper.ResponseAPI(res, constant.RES_200_DELETED);
    } catch (error) {
        console.log(error);
        return helper.ResponseAPI(res, constant.RES_422_SOMETHING_WRONG);
    }
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers
}