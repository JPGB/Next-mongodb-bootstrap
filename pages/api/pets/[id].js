import { connectToDatabase } from '../../../util/mongodb'
import { ObjectID } from 'mongodb'

export default async function PetsId( { query : { id } }, res ) {
    
    const { client, db } = await connectToDatabase()

    const isConnected = await client.isConnected()

    if (isConnected) {

        let json, objID

        try{
            objID = new ObjectID(id)
        }catch( ex ){
            res.status(404).json({"error":`id: ${id} invalido!`})
        }

        await db.collection('pets').find({"_id": objID }).toArray().then( (data) => {
            json = data
        } )

        if(json){
            res.status(200).json(json)
        }else{
            res.status(404).json({"error":"id não encontrado!"})
        }
        

    }else{
        res.status(404).json({"error":"erro ao conectar!"})
    }

}
