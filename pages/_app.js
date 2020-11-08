import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'


export default function MyApp({ Component, pageProps }) {
    return  <>            
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">PetCaro</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="/">Principal</Nav.Link>
                        <Nav.Link href="/pets">pets</Nav.Link>
                        </Nav>
                    </Navbar>
                </>

                <Container fluid className="mt-3">
                    <Row>
                        <Col>
                            <Component {...pageProps} />
                        </Col>
                    </Row>
                </Container>

                <style jsx global>{`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                        background-color: #121212;
                    }

                    * {
                    box-sizing: border-box;
                    }
                `}</style>

            </>
}

