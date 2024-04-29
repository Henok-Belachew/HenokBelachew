
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
    <div className="navbar border-[1px] border-l-on-surface-5 dark:border-d-on-surface-5 bg-gradient-to-br to-100% from-0% dark:from-[#002744] to-transparent from-[#0087e831] ">

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
