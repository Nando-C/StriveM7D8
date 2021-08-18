import React, { ChangeEvent } from "react";
import { Navbar, Nav, Form, Image, Button } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";

interface NavBarProps {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    searchFetch: (q?: string) => Promise<void>
}


const NavBar = ({ history, location, query, setQuery, searchFetch }: RouteComponentProps & NavBarProps) => {

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const search = () => {
        searchFetch(query)
        history.push('/')
        setQuery('')
    }

    return (  
        <>
        <Navbar bg="light" variant="light" expand="sm" className='rounded-lg sticky-top' >
                <Link to='/'>
                    <Image className='brandLogo mr-3' src='https://cdn.dribbble.com/users/60166/screenshots/11313975/media/5f96fe67afaa4b9a24e5a2d5099e1d7f.jpg?compress=1&resize=60x50'/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/favourites'>Favourites</Link>
                    </Nav>
                    <Form.Control
                        type="text"
                        placeholder="Search Music"
                        className="m-2 w-50"
                        value={query}
                        onChange={inputChange}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                search()
                                // searchFetch(query)
                                // history.push('/')
                                // setQuery('')
                            }
                        }}
                    />
                    <Button className='my-2' variant="outline-info" onClick={()=> search()} >Search</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
 
export default NavBar;