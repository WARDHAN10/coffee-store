import React from 'react';
import './navbar.css';

interface NavbarProps {
  links: { text: string; url: string }[];
}
const title = "Hideaway Coffee"
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
     <div style={{ flex: 1,fontSize:"22px",fontFamily:'san-serif' }}>{title}</div> 
      <ul style={{ flex: 1 }}>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;