import { ChangeEvent } from "react";
import { Navbar, Nav, Form, Image, Button } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";

interface NavBarProps {
    query: string
    setQuery: any
    searchFetch: any
    }


const NavBar = ({ history, location, query, setQuery, searchFetch }: RouteComponentProps & NavBarProps) => {

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (  
        <Navbar bg="light" variant="light" expand="sm">
                <Link to='/'>
                    <Image className='brandLogo mr-3' src='https://cdn.dribbble.com/users/60166/screenshots/11313975/media/5f96fe67afaa4b9a24e5a2d5099e1d7f.jpg?compress=1&resize=60x50'/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/favourites'>Favourites</Link>
                    </Nav>
                    {/* <Form.Group controlId="exampleForm.ControlSelect1"> */}
                        {/* <Form.Label>Example select</Form.Label> */}
                        {/* <Form.Control 
                            className="ml-2" 
                            as="select" 
                            placeholder="Select Category"
                            value={this.state.category} 
                            onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    category: e.target.value,
                                })
                                this.props.fetchJobs(`category=${e.target.value}`)
                            }} >
                            <option>Select Category</option>
                            <option>Software Development</option>
                            <option>Customer Service</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                            <option>Product</option>
                            <option>Business</option>
                            <option>DevOps / Sysadmin</option>
                            <option>Finance / Legal</option>
                            <option>Human Resources</option>
                            <option>Teaching</option>
                            <option>Medical / Health</option>
                            <option>All others</option>
                        </Form.Control> */}
                    <Form.Control
                        type="text"
                        placeholder="Search Music"
                        className="m-2 w-50"
                        value={query}
                        onChange={inputChange}
                    // onKeyDown={(e) => {
                    //     if (e.key === 'Enter') {
                    //         this.props.fecthJobs(this.props.query)
                    //     }
                    // }}
                    />
                    <Button className='my-2' variant="outline-info" onClick={()=> searchFetch(query)} >Search</Button>
                </Navbar.Collapse>
            </Navbar>
    );
}
 
export default NavBar;