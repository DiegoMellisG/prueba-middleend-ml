const {AVAILABLE_SORTS, AVAILABLE_SITES} = require('../assets/constants')
const {getQuery} = require('../services/ml')

async function queryProcess(req, res) {
    
    const queryParams = req.query;
    if(!AVAILABLE_SITES.includes(req.params.site)){
        res.status(400).send(
            {
                message: 'Parámetro site no válido',
            }
        )
        return;
    }
    if ('sort' in queryParams) {
        if(!AVAILABLE_SORTS.includes(queryParams['sort'])){
            res.status(400).send(
                {
                    message: 'El orden ingresado no es válido',
                    code: 400
                }
            )
            return;
        }
    }
    if ('limit' in queryParams) {
       const limit = Number(queryParams['limit']);
       if(isNaN(limit)){
           res.status(400).send(
               {
                   message: 'No es número válido',
               }
           )
           return;
       }
       
    }
    if ('offset' in queryParams) {
        const offset = Number(queryParams['offset']);
        if(isNaN(offset)){
            res.status(400).send(
                {
                    message: 'No es número válido',
                }
            )
            return;
        }
        
    } 
    const queryString = new URLSearchParams(queryParams).toString();
    try {
       const response = await getQuery(`${process.env.ML_BASE_QUERY_URL}/${req.params.site}/search?${queryString}`);
       res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: error.message,
        })
    }
}

module.exports = {
    queryProcess
}