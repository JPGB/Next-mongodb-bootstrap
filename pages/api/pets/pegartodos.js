import { connectToDatabase } from '../../../util/mongodb'

export default async function handle(req, res) {

    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected()

    if (isConnected) {

        let json

        const cursor = await db.collection('pets').find().toArray().then( (data) => {
            json = data
        })
        
        res.status(200).json(json)

    } else {
        res.status(404).json({ "error": "erro ao conectar!" })
    }

}
