
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
              <button className={`navbar-link text-on-light-surface-10 hover:text-on-light-surface-11 dark:text-on-dark-surface-10 dark:hover:text-on-dark-surface-11 ${activeTab === label ? 'active' : ''}`} >{label}</button>
      </li>
    )
  }

  return (
    <div className="navbar border-[1px] border-primary-light-5 dark:border-primary-dark-5 bg-gradient-to-br to-100% from-0% dark:from-[#002744] dark:to-[#09121B] to-[#ffffff]
    from-[#0087e831] ">

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
