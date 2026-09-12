import img from "../assets/logo-text.png";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center gap-x-2 p-2">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <ul className=" flex justify-between items-center gap-x-4 font-semibold">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="btn btn-ghost">Sign In</button>

          <button className="btn btn-secondary rounded-full px-6">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
