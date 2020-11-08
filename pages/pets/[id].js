import {useState} from 'react'

export default function PetId({ data }) {

    const [form, setform] = useState({
        nome: data[0].nome,
        fome: data[0].fome,
    })

    const handleChange = e => setform({ ...form, [e.target.name]: e.target.value })

    return (
        <div>
            { data.map((val) => {
                return  <form key={val._id}> 
                            <div>
                                <label>
                                    Nome:
                                </label>
                                <input
                                    type='text'
                                    placeholder=''
                                    name='nome'
                                    value={form.nome}
                                    onChange={e => handleChange(e)}                                
                                >
                                </input>
                            </div>
                            <div>
                                <label>
                                    Estado de fome:
                                </label>
                                <input
                                    type='text'
                                    placeholder=''
                                    name='fome'
                                    value={form.fome}
                                    onChange={e => handleChange(e)}                            
                                >
                                </input>
                            </div>
                        </form>
            })}
        </div>
    )

}

export async function getServerSideProps(context) {

    const res = await fetch(`http://localhost:3000/api/pets/${context.query.id}`)
    const data = await res.json()

    return {
        props: { data },
    }
}


