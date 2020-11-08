import {useState} from 'react'
import { Form, Container } from 'react-bootstrap'

export default function PetId({ data }) {

    const [form, setform] = useState({
        nome: data[0].nome,
        fome: data[0].fome,
    })

    const handleChange = e => setform({ ...form, [e.target.name]: e.target.value })

    return (
        <Container>
            { data.map((val) => {
                return  <Form>
                            <Form.Group controlId="formGroupNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control 
                                    style={{ backgroundColor: '#343a40' }}
                                    type='text'
                                    placeholder=''
                                    name='nome'
                                    value={form.nome}
                                    onChange={e => handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupFome">
                                <Form.Label>Estado de fome:</Form.Label>
                                <Form.Control 
                                    type='text'
                                    placeholder=''
                                    name='nome'
                                    value={form.nome}
                                    onChange={e => handleChange(e)}
                                />
                            </Form.Group>
                        </Form>
            })}
        </Container>
    )

}

export async function getServerSideProps(context) {

    const res = await fetch(`https://next-mongodb-bootstrap.vercel.app/api/pets/${context.query.id}`)
    const data = await res.json()

    return {
        props: { data },
    }
}


