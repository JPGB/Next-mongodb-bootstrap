import { useRouter } from 'next/router'
import useSWR from 'swr'

import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap'

import Link from 'next/link'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data
}


export default function index() {

    const { query } = useRouter()

    const { data, error } = useSWR('/api/pets/pegartodos',fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <Container>
          <Row className="row d-flex justify-content-between">
            { data.map( (val) => {
              return (
                <Col
                  style={{ maxWidth: '17rem' }}
                  className="mb-2"
                >
                  <Card 
                    
                    bg={"dark"}
                    text={"light"}
                    key={val._id}
                    style={{ width: '17rem' }}
                  >
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                      <Card.Title>{val.nome}</Card.Title>                  
                        <Link href={`/pets/${val._id}`}>
                            <a> Ver detalhes </a>
                        </Link>
                    </Card.Body>
                  </Card>              
                </Col>
            )}) }
          </Row>
        </Container>
    )
}
