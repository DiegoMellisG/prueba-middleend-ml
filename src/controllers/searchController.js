const { AVAILABLE_SORTS, AVAILABLE_SITES, SEARCH_QUERY_MOCK } = require('../assets/constants')
const { getQuery } = require('../services/ml')

async function searchProcess(req, res) {

    

    if (!req.headers['x-auth-token']) {
        res.status(401).send(
            {
                message: 'Request no autorizada, header x-auth-token no está presente',
            }
        )
        return;
    }
    const queryParams = req.query;
    console.log('Params: ', req.params);
    console.log('Query Params: ', queryParams);
    console.log('HTTP Method: ', req.method);
    console.log('Endpoint: ', req.url);
    console.log('Headers: ', req.headers);
    
    
    if (!AVAILABLE_SITES.includes(req.params.site)) {
        res.status(400).send(
            {
                message: 'Parámetro site no válido',
            }
        )
        return;
    }
    if ('sort' in queryParams) {
        if (!AVAILABLE_SORTS.includes(queryParams['sort'])) {
            res.status(400).send(
                {
                    message: 'Solo está permitido price_asc y price_desc',
                    code: 400
                }
            )
            return;
        }
    }
    if ('limit' in queryParams) {
        const limit = Number(queryParams['limit']);
        if (isNaN(limit)) {
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
        if (isNaN(offset)) {
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
        if (req.headers['x-auth-token'] === process.env.X_AUTH_TOKEN) {
            const response = await getQuery(`${process.env.ML_BASE_QUERY_URL}/${req.params.site}/search?q=${req.params.query}&${queryString}`);
            res.status(200).send(response);
        }else if (req.headers['x-auth-token'] === process.env.X_AUTH_TOKEN_MOCK){
            res.status(200).send(SEARCH_QUERY_MOCK)
        }else{
            res.status(401).send(
                {
                    message: 'El token ingresado no es válido'
                }
            )
            return;
        }

    } catch (error) {
        res.status(500).send({
            message: error.message,
        })
    }
}

module.exports = {
   searchProcess
}