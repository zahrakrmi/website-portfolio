import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className='py-12 bg-primary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row items-center justify-between ">
                <Logo light={true}/>
                <div className="font-light text-white">Copyright &copy; 2024,All right reserved.</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer