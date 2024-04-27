
const navItems = [
  'About',
  'Resume',
  'Portfolio',
  'Certificates',
  'Contact'
];








function Navbar({activeTab, setActiveTab}: {activeTab: string, setActiveTab: Function}) {

  function NavbarItem ({label}: {label: string}) {
    return (
      <li onClick={() => setActiveTab(label)} className="navbar-item">
              <button className={`navbar-link ${activeTab === label ? 'active' : ''}`} >{label}</button>
      </li>
    )
  }

  return (
    <div className="navbar">

        <ul className="navbar-list">

          {navItems.map((item, index) => (
            <NavbarItem
              key={index}
              label={item}
            />
          ))}

        </ul>

      </div>
  )
}

export default Navbar
