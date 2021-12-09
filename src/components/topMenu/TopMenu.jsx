import React from 'react';
import './TopMenu.scss';
import {Container, Nav, Navbar} from 'react-bootstrap'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg';

function TopMenu() {
    return (
        <Navbar bg='dark' variant='dark' className='top-menu' >
            <Container>
                <BrandNav />
                <MenuNav />

            </Container>
        </Navbar>
    );
};

export default TopMenu;

function BrandNav() {
    return <Navbar.Brand>
                <Logo />
                <h4>iAmSebastian</h4>
            </Navbar.Brand>
};

function MenuNav() {
    return (
        <Nav className='mr-auto'>
            <Nav.Link href='#'>Dulces</Nav.Link>
            <Nav.Link href='#'>Paletas</Nav.Link>
            <Nav.Link href='#'>Aguas</Nav.Link>
        </Nav>
    )
}
