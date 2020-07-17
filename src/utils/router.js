const { Router } = require('express')

const GymController = require('../controllers/GymController')
const ClientController = require('../controllers/ClientController')
const DayController = require('../controllers/DayController')
const TimeDayController = require('../controllers/TimeDayController')
const TimeClientController = require('../controllers/TimeClientController')

const router = Router()

router.post('/', GymController.create)
router.get('/', GymController.showAll)



router.post('/client/:gym_id', ClientController.create)
router.get('/client/:gym_id', ClientController.showAll)

router.post('/date/:gym_id', DayController.createDate)
router.get('/date/:gym_id', DayController.listDates)
router.delete('/date/:gym_id/:day_id', DayController.deleteDate)

router.post('/time/:gym_id/:day_id', TimeDayController.createTimes)
router.get('/time/:gym_id/:day_id', TimeDayController.listTimes)

router.post('/:gym_id/:client_id/:time_id', TimeClientController.createTimeClient)
router.get('/:gym_id/:timeclient_id', TimeClientController.listTimeClients)
router.delete('/:gym_id/:timeclient_id', TimeClientController.deleteTimeClient)

module.exports = router

/*
GYM
    create
    listGyms
CLIENT
    create
    listByGym
DATES
    createDate - createTime  
    deleteDate
TIMES   
    listTimes
    deleteTime
TIMECLIENT
    addClientToTime
    listClientToTime
    removeClientToTime
*/