const { getItem, getItemDescription } = require('../services/ml')
const { AUTHOR, ITEM_MOCK } = require('../assets/constants')

async function itemProcess(req, res) {


    if (!req.headers['x-auth-token']) {
        res.status(401).send(
            {
                message: 'Request no autorizada, header x-auth-token no está presente',
            }
        )
        return;
    }
    console.log('Params: ', req.params);
    console.log('Query Params: ', req.query);
    console.log('HTTP Method: ', req.method);
    console.log('Endpoint: ', req.url);
    console.log('Headers: ', req.headers);
    try {
        if (req.headers['x-auth-token'] === process.env.X_AUTH_TOKEN) {
            const item = await getItem(`${process.env.ML_BASE_ITEM_URL}/${req.params.id}`);
            item['description'] = await getItemDescription(`${process.env.ML_BASE_ITEM_URL}/${req.params.id}/description`)
            res.status(200).send({
                author: AUTHOR,
                item: item
            })
            console.log('Headers response:', res.getHeaders());
            console.log('Response Body', {
                author: AUTHOR,
                item: item
            });
            return;
        } else if (req.headers['x-auth-token'] === process.env.X_AUTH_TOKEN_MOCK) {
            res.status(200).send(ITEM_MOCK)
            console.log('Headers response:', res.getHeaders());
            console.log('Response Body', ITEM_MOCK);
            return;
            
        } else {
            res.status(401).send(
                {
                    message: 'El token ingresado no es válido'
                }
            )
            return;
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message)
    }


}

module.exports = {
    itemProcess
}